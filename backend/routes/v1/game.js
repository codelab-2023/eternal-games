const router = require('express').Router()

const {
  createGame,
  getGame,
  getGameList,
  dashboardCards,
  updateGame,
  deleteGames,
  uploadGameZip,
} = require('../../controllers/game')

// User routes - /v1/games
router.get('/dashboard-cards', dashboardCards)
router.get('/:slug', getGame)
router.get('/', getGameList)
router.post('/create', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGames)
router.post('/upload', uploadGameZip)

module.exports = router
