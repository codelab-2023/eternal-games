const router = require('express').Router()

const { getUsers, addUser } = require('../../controllers/user')

// User routes - /v1/users
router.get('/', getUsers)
router.post('/', addUser)
// router.put('/:userId', updateUser)
// router.delete('/:userId', deleteUser)

module.exports = router
