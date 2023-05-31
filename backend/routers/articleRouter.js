const express = require('express')
const { getArticles, createArticle } = require('../controllers/articleController')

//MIDDLEWARE
const tokenVerification = require('../middleware/tokenVerification')
const { adminVerification } = require('../middleware/userVerification') 

const articleRouter = express.Router()

articleRouter.get('/', getArticles)
articleRouter.post('/',tokenVerification, adminVerification, createArticle)

module.exports = articleRouter