const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUser = async (req, res) => {
    const { name, role, password, email } = req.body

    if(!name || !email || !password)
        return res.status(400).json({
            err: "Korisnik mora imati sva neophodna polja"
        })

    if(role && !(["ADMIN", "WORKER", "USER"].includes(role.toUpperCase()))){
        console.log(role.toUpperCase());
        return res.status(400).json({
            err:"Invalid role for the user",
        })
    }

    try {
        const user = await User.findOne({email})
        if(user)
            return res.status(400).json({
                err: "Korisnik sa tim emailom vec postoji"
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            err: "Internal server error"
        })
    }

    //Hasing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        const user = User.create({
            name,
            email,
            password: hashedPassword,
            role: role.toUpperCase()
        })

        if(user)
            return res.status(201).json({
                token: await jwt.sign({userEmail: user.email}, process.env.TOKEN_STRING, {
                    expiresIn: '1d',
                }),
                email,
            })
    }

    catch(err) {
        console.log(err)
        return res.status(500).json({
            err:"Internal server error"
        })
    }
    
}

const signIn = async (req, res) => {
    const { email, password } = req.body

    if(!email || !password)
        return res.status(400).json({
            err: "Ne postoje kredencijali"
        })

    try {
        const user = await User.findOne({email})
        if(!user)
            return res.status(404).json({
                err:"Losi kredencijali"
            })

        const success = await bcrypt.compare(password, user.password)

        if(!success)
            return res.status(401).json({
                err: "Losi kredencijali"
            })
        
        return res.status(200).json({
            token: jwt.sign({ email: user.email }, process.env.TOKEN_STRING, { expiresIn: '1d' }),
            email,
            role: user.role
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora" 
        })
    }
}

module.exports = {
    createUser,
    signIn,
}