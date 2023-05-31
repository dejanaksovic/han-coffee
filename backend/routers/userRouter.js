const express = require('express')
const userRouter = express.Router()

const { createUser, signIn } = require('../controllers/userController')

userRouter.post('/', createUser)
userRouter.post('/signin', signIn)

module.exports = userRouter