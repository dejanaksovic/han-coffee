const Article = require('../models/Article')
const fs = require('fs')

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        return res.status(200).json({
            articles
        })
    }

    catch(err) {
        return res.status(500).json({
            err: "Internal server error"
        });
    }
}

const createArticle = async (req, res) => {

    const { name, price, desc } = req.body

    if(!req.files)
        return res.status(400).json({
            err: "No image shown"
        })

    const image = req.files.image

    try {
        const article = await Article.create({
            name,
            price,
            desc,
            url: image.name
        })

        image.mv(`../images/${image.name}`, (err) => {
            console.log(err);
        })

        return res.status(200).json({
            article,
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            err: "Internal server error"
        })
    }
}

module.exports = {
    getArticles,
    createArticle
}