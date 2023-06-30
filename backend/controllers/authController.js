const { default: axios } = require('axios')
const User = require('../models/User')
const qs = require('querystring')
const jwt = require('jsonwebtoken')

const googleAuthhander = async(req, res) => {
    const googleApiUrl = 'https://oauth2.googleapis.com/token'
    let googleUser

    // get the code from qs
    const { code } = req.query

    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
    }

    // get the id and access token with the code 
    try {
        response = await axios.post(`${googleApiUrl}`, qs.stringify(values), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
     
        googleUser = jwt.decode(response.data.id_token)
    }

    catch(err) {
        console.error(err.response.data)
    }

    if(!googleUser.email_verified)
        return res.status(403).json({
            message: "Morate verifikovati gugl nalog"
        })

    const user = await User.findOneAndUpdate({
        email: googleUser.email,
    }, {
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
    }, {
        new: true,
        upsert: true,
    })

    //create access and refresh tokens
    if(!user.refreshToken) {
        user.refreshToken = jwt.sign({email:  googleUser.email}, process.env.REFRESH_TOKEN_STRING, { expiresIn: 1000*60*60*24*365})//a year
        await user.save()
    }

    const accessToken = jwt.sign({ email: user.email }, process.env.TOKEN_STRING, { expiresIn: '5min' })
    const refreshToken = user.refreshToken

    // set coockies
    // TODO

    const valuesToSend = {
        accessToken,
        refreshToken,
        email: user.email,
        role: user.role,
    }
    
    // Redirect to the frontend
    res.redirect(`${process.env.CLIENT_URL}?${qs.stringify(valuesToSend)}`);
}

module.exports = {
    googleAuthhander,
}