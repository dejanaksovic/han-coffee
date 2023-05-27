const express = require('express')
const { getArticles, createArticle } = require('../controllers/articleController')

const articleRouter = express.Router()

articleRouter.get('/', getArticles)
articleRouter.post('/', createArticle)

module.exports = articleRouter