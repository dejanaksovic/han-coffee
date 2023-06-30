const Article = require('../models/Article')
const mongoose = require('mongoose')
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
            err: "Internalni problem, kontaktirajte administratora"
        });
    }
}

const createArticle = async (req, res) => {

    const { name, price, desc, category } = req.body

    if(!req.files)
        return res.status(400).json({
            err: "Potrebna je slika"
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
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora"
        })
    }
}

const deleteArticle = async (req, res) => {
    const { id } = req.params

    if(!id && !mongoose.isValidObjectId(id))
        return res.status(400).json({
            err: "Taj artikal ne postoji"
        })

    try {
    const article = await Article.findByIdAndDelete(id)
    if(!article)
        return res.status(404).json({
            err: "Artikal nije pronadjen"
        })

        try {
            fs.unlinkSync(`images/${article.url}`, (err) => {
                if(err)
                    console.log(err);
            })
        }
        catch(err) {
            return res.status(500).json({
                err: "Internalna greska, kontaktirajte administratora"
            })
        }

        return res.status(200).json({
            article
        })
    }
    catch(err) {
        return res.status(500).json({
            err: "Greska pri komunikaciji sa bazom, kontaktirajte administratora"
        })
    }
}

module.exports = {
    getArticles,
    createArticle,
    deleteArticle
}