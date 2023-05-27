const Article = require('../models/Article')

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

    try {
        const article = await Article.create({
            name,
            price,
            desc
        })

        return res.status(200).json({
            article
        })
    }
    catch(err) {
        return res.status(500).json({
            err
        })
    }
}

module.exports = {
    getArticles,
    createArticle
}