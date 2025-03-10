const { GameStore, CategoryStore, WebsiteStore } = require('../models')
const { sendSuccess, sendError } = require('./utils')
const fs = require('fs')
const path = require('path')
const unzipper = require('unzipper')

const maxFileUploadSize = process.env.MAX_FILE_UPLOAD_SIZE // default 2 GB

const createGame = async (req, res) => {
  try {
    const gameInfo = req.body

    req.body.slug = req.body.gameName.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '')

    const games = await GameStore.find().sort({ createdOn: -1 })

    let checkSlug = games.some((game) => game.slug === req.body.slug)

    if (checkSlug) {
      let slugBase = req.body.slug
      let counter = 1

      while (checkSlug) {
        req.body.slug = `${slugBase}-${counter}`
        checkSlug = games.some((game) => game.slug === req.body.slug)
        counter++
      }
    }

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
      return sendError(res, 'Invalid or missing game slug', null, 400)
    }

    const game = await GameStore.findOne({ slug: slug }).populate('categories')

    if (!game) {
      return sendError(res, 'Game not found', null, 404)
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
      description,
      thumbnail,
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

    let newSlug = gameName.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '')

    // Fetch all games excluding the current game being updated
    const games = await GameStore.find({ _id: { $ne: gameId } })

    // Check for duplicate slugs
    let isDuplicateSlug = games.some((game) => game.slug === newSlug)
    if (isDuplicateSlug) {
      let slugBase = newSlug
      let counter = 1

      while (isDuplicateSlug) {
        newSlug = `${slugBase}-${counter}`
        isDuplicateSlug = games.some((game) => game.slug === newSlug)
        counter++
      }
    }

    const updateGame = await GameStore.updateOne(
        { _id: gameId },
        {
          gameName,
          slug: newSlug,
          description,
          thumbnail,
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

const uploadGameThumbnail = async (req, res) => {
  try {
    const gameId = req.body.id
    const file = req.files.file

    const allowTypes = [ 'image/png', 'image/jpeg', 'image/jpg', 'image/webp' ]
    if (!allowTypes.includes(file.mimetype) || file.size > maxFileUploadSize) return sendError(res, 'Error : Invalid file format or size.', null, 400)

    const game = await GameStore.findOne({ _id: gameId })
    if (!game) return sendError(res, 'Game not found.', null, 404)

    // Delete the previous thumbnail if it exists
    if (game?.thumbnail) {
      const oldFilePath = path.join(__dirname, '..', game?.thumbnail)
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath) // Delete the file
        console.log('✅ Previous thumbnail deleted:', oldFilePath)
      }
    }

    const fileExtension = file.name.split('.').pop()
    const timestamp = Date.now()
    const sanitizedGameName = game.gameName.replaceAll(' ', '_')

    const filename = `${sanitizedGameName}_${timestamp}.${fileExtension}`

    const filePath = req.directoryPathToStore + filename
    await file.mv(filePath)

    sendSuccess(res, {
      url: `https://api.eternalgames.io/${filePath}`,
      message: 'File uploaded successfully'
    })
  } catch (error) {
    sendError(res, 'Error while fetching upload Game Thumbnail Media.', error)
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

    if (zip.mimetype !== 'application/zip' || zip.size > maxFileUploadSize) return sendError(res, 'Error : Invalid file format or size.', null, 400)

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
  uploadGameThumbnail,
  uploadGameZip
}
