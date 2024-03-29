const router = require('express').Router();

const {
  createGame,
  getGame,
  getGameList,
  dashboardCards,
  updateGame,
  deleteGames,
} = require('../../controllers/game');

// User routes - /v1/games
router.get('/dashboard-cards', dashboardCards);
router.get('/:id', getGame);
router.get('/', getGameList);
router.post('/create', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGames);

module.exports = router;
