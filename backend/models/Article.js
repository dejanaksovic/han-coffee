const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    url: String,
}, {timestamps: true})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article