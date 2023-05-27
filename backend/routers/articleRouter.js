const express = require('express')
const { getArticles } = require('../controllers/articleController')

const articleRouter = express.Router()

articleRouter.get('/', getArticles)

module.exports = articleRouter