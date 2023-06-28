const express = require('express')
const userRouter = express.Router()

const { adminVerification } = require('../middleware/userVerification')
const tokenVerification = require('../middleware/tokenVerification') 

const { createUser, signIn } = require('../controllers/userController')

userRouter.post('/',tokenVerification, adminVerification, createUser)
userRouter.post('/signin', signIn)

module.exports = userRouter