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

    const { name, price, desc, category } = req.body

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
            category: category.toUpperCase(),
            url: image.name
        })

        image.mv(`images/${image.name}`)

        return res.status(200).json({
            article,
            newToken: req.newToken | null,
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