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

module.exports = {
    getArticles
}