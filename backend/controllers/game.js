const { GameStore, CategoryStore, WebsiteStore } = require('../models')
const { sendSuccess, sendError } = require('./utils')
const fs = require('fs')
const path = require('path')
const unzipper = require('unzipper')

const maxFileUploadSize = process.env.MAX_FILE_UPLOAD_SIZE // default 2 GB

const createGame = async (req, res) => {
  try {
    const gameInfo = req.body

    if (!gameInfo) {
      return sendError(res, 'game data not found', null, 404)
    }

    const game = await GameStore.create(gameInfo)

    return sendSuccess(res, { data: game })
  } catch (error) {
    return sendError(res, 'Error while adding game', error)
  }
}

const getGame = async (req, res) => {
  try {
    const slug = req.params.slug

    if (!slug || typeof slug !== 'string') {
      return sendError(res, 'Invalid or missing game slug', null, 400);
    }

    const game = await GameStore.findOne({ slug: slug }).populate('categories')

    if (!game) {
      return sendError(res, 'Game not found', null, 404);
    }

    return sendSuccess(res, { game })
  } catch (error) {
    return sendError(res, 'Error while getting game', error)
  }
}

const getGameList = async (req, res) => {
  try {
    const games = await GameStore.find({ status: 'active' }).sort({ createdOn: -1 })

    return sendSuccess(res, { games })
  } catch (error) {
    return sendError(res, 'can\'t find game list', error)
  }
}

const dashboardCards = async (req, res) => {
  try {
    const games = await GameStore.countDocuments()
    const categories = await CategoryStore.countDocuments()
    const websites = await WebsiteStore.countDocuments()

    return sendSuccess(res, {
      categoryCount: categories,
      gameCount: games,
      websiteCount: websites
    })
  } catch (error) {
    return sendError(res, 'can\'t find game list', error)
  }
}

const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id
    const {
      gameName,
      slug,
      description,
      thumbnail,
      gamePreview,
      rating,
      developer,
      technology,
      platform,
      shortDescription,
      status,
      categories,
      url,
      isSupportMobile,
      isSupportDesktop,
      likes,
      disLikes
    } = req.body

    if (!gameId) {
      return sendError(res, 'invalid gameId', null, 404)
    }

    const updateGame = await GameStore.updateOne(
        { _id: gameId },
        {
          gameName,
          slug,
          description,
          thumbnail,
          gamePreview,
          rating,
          developer,
          technology,
          platform,
          shortDescription,
          status,
          categories,
          url,
          isSupportMobile,
          isSupportDesktop,
          likes,
          disLikes
        }
    )

    if (!updateGame) {
      return sendError(res, 'Game not found', null, 404)
    }

    return sendSuccess(res, 'Game updated successfully')
  } catch (error) {
    return sendError(res, 'internal server error', error, 404)
  }
}

const deleteGames = async (req, res) => {
  try {
    const gameId = req.params.id

    const deleteGame = await GameStore.findByIdAndDelete(gameId)

    if (!deleteGame) {
      return sendError(res, 'game not found', null, 404)
    }

    return sendSuccess(res, { deleteGame })
  } catch (error) {
    return sendError(res, 'Internal server error', error, 404)
  }
}

const uploadGameZip = async (req, res) => {
  try {
    const zip = req.files.gameZip
    const id = req.body.id

    if (!zip) {
      return res.status(400).send('No files were uploaded.')
    }

    const zipPath = `zip/${zip.name}`

    if (!zip.mimetype === 'application/zip' || zip.size > maxFileUploadSize) return sendError(res, 'Error : Invalid file format or size.', null, 400)

    await zip.mv(zipPath)
    const targetDir = `games/${id}`

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    } else {
      if (fs.readdirSync(targetDir).length > 0) {
        // Delete existing contents of the directory if it's not empty
        deleteDirectoryContents(targetDir)
      }
    }

    await new Promise((resolve, reject) => {
      fs.createReadStream(zipPath).pipe(unzipper.Extract({ path: `games/${id}` })).on('finish', () => resolve()).on('error', (err) => reject(err))
    })

    const rootDir = `games/${id}`
    const filename = 'index.html'

    //finds index.html from zip
    function findFile(rootDir, filename) {
      const files = fs.readdirSync(rootDir)
      for (const file of files) {
        const filePath = path.join(rootDir, file)
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
          const foundFilePath = findFile(filePath, filename)
          if (foundFilePath) {
            return foundFilePath
          }
        } else if (file === filename) {
          return filePath
        }
      }
      return null // File not found
    }

    //Deletes contents of a directory
    function deleteDirectoryContents(directoryPath) {
      const files = fs.readdirSync(directoryPath)
      for (const file of files) {
        const filePath = path.join(directoryPath, file)
        if (fs.statSync(filePath).isFile()) {
          fs.unlinkSync(filePath) // Delete file
        } else {
          deleteDirectoryContents(filePath) // Recursively delete subdirectories
          fs.rmdirSync(filePath) // Delete directory
        }
      }
    }

    const filePath = findFile(rootDir, filename)
    if (!filePath) {
      return sendError(res, 'index.html not found from zip', null, 404)
    }

    const gameUrl = `https://api.eternalgames.io/${filePath}`

    return sendSuccess(res, { gameUrl: gameUrl })
  } catch (error) {
    return sendError(res, 'Error while uploading zip', error)
  }
}

module.exports = {
  createGame,
  getGame,
  getGameList,
  dashboardCards,
  updateGame,
  deleteGames,
  uploadGameZip
}
