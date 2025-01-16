const v1Routes = require('express').Router()
const gameRoutes = require('./game')
const categoryRoutes = require('./category')
const userRoutes = require('./user')
const websiteRoutes = require('./website')
const pagesRoutes = require('./page')
const trendingRoutes = require('./trending')
const featuresRoutes = require('./feature')

v1Routes.use('/games', gameRoutes)
v1Routes.use('/categories', categoryRoutes)
v1Routes.use('/users', userRoutes)
v1Routes.use('/websites', websiteRoutes)
v1Routes.use('/pages', pagesRoutes)
v1Routes.use('/trending', trendingRoutes)
v1Routes.use('/feature', featuresRoutes)
v1Routes.get('/', (_req, res) => res.send('Welcome! V1 service.'))

module.exports = v1Routes
