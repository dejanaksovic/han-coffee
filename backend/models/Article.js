const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
}, {timestamps: true})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article