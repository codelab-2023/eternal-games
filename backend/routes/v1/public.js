const router = require('express').Router()

const { login, register, verifyUser } = require('../../controllers/user')
const { getGame, getGameList } = require('../../controllers/game')
const { getWebsiteListPublic } = require('../../controllers/website');

// User routes - /v1/users
router.post('/login', login)
router.post('/register', register)
router.post('/verify-user', verifyUser)

// User routes - /v1/game
router.get('/game/:id', getGame);
router.get('/game', getGameList);

//User routes - /v1/website
router.get('/website', getWebsiteListPublic);

module.exports = router
