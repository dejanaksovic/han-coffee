const express = require('express')
const { googleAuthhander } = require('../controllers/authController')

const authRouter = express.Router()

authRouter.get('/google', googleAuthhander)

module.exports = authRouter