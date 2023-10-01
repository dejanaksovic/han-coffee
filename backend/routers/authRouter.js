const express = require('express')
const { googleAuthhander, twilioAuth } = require('../controllers/authController')
const tokenVerification = require('../middleware/tokenVerification')

const authRouter = express.Router()

authRouter.get('/google', googleAuthhander)
authRouter.post('/twilio', tokenVerification, twilioAuth)

module.exports = authRouter