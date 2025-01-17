const router = require('express').Router()

const { login, register, verifyUser } = require('../../controllers/user')
const { getGame, getGameList } = require('../../controllers/game')
const { deletePreviousGameVersion } = require('../../controllers/test')
const { getWebsiteListPublic } = require('../../controllers/website')
const { getPageDetails } = require('../../controllers/page')
const { getAllTrendings } = require('../../controllers/trending')
const { getAllFeatures } = require('../../controllers/feature')

// User routes - /v1/users
router.post('/login', login)
router.post('/register', register)
router.post('/verify-user', verifyUser)

// User routes - /v1/game
router.get('/game/:slug', getGame)
router.get('/game', getGameList)

// User Routes - /v1/test
router.get('/hello', deletePreviousGameVersion)

//User routes - /v1/website
router.get('/website', getWebsiteListPublic)

// pages routes - /v1
router.get('/page/:id', getPageDetails)

// trending routes - /v1
router.get('/trending-list', getAllTrendings)

// feature routes - /v1
router.get('/feature-list', getAllFeatures)

module.exports = router
