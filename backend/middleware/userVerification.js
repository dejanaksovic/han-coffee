const User = require('../models/User')

const adminVerification = async (req, res, next) => {

    try {
        const user = await User.findOne({
            email: req.userEmail
        })
        if(!user) {
            return res.status(404).json({
                err: "Taj korisnik ne postoji"
            })
        }

        if(user.role !== "ADMIN")
            return res.status(403).json({
                err:"Nemate dozvolu za ovu akciju"
            })

        next()
    }

    catch(err) {
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora"
        })
    }
}

const workerVerification = async (req, res, next) => {
    const { userEmail } = req

    if(!userEmail)
        return res.status(401).json({
            err:"Ne postoji autorizacija"
        })

    try {
        const user = await User.findOne({
            email: userEmail,
        })
        if(!user)
            return res.status(404).json({
                err: "Ovaj korisnik vise ne postoji"
            })

        if(user.role !== "WORKER")
            return res.status(403).json({
                err: "Nemate dozvolu za ovu akciju"
            })

        next()
    }

    catch(err) {
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora"
        })
    }
}

module.exports = {
    adminVerification,
    workerVerification
}