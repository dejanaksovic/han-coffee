const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    url: String,
    category: { type: String, enum: ["ESPRESSO", "CEDJENI SOKOVI", "TOPLI NAPICI", "KAFE SA UKUSIMA", "SEJK", "KOLACI", "SOKOVI I HLADNA PICA"], required: true }
}, {timestamps: true})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article