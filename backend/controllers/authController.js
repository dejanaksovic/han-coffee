const { default: axios } = require('axios')
const User = require('../models/User')
const qs = require('querystring')
const jwt = require('jsonwebtoken')

const googleAuthhander = async(req, res) => {
    const googleApiUrl = 'https://oauth2.googleapis.com/token'
    let googleUser

    // get the code from qs
    const { code } = req.query

    console.log(req.query);

    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
    }

    console.log('values', values);

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
            message: "Google account is not verified"
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
        user.refreshToken = jwt.sign({email:  googleUser.email}, process.env.REFRESH_TOKEN_STRING)
        await user.save()
    }

    const accessToken = jwt.sign({ email: user.email }, process.env.TOKEN_STRING, { expiresIn: 10*60*1000 })
    const refreshToken = user.refreshToken

    //set coockies
    res.cookie("accessToken", accessToken, {encode: String, maxAge: 1000*6*10, httpOnly: true, sameSite: 'none', secure: true, domain: ".netlify.app/"})
    res.cookie("refreshToken", refreshToken, {encode: String, maxAge: 1000*6*10, httpOnly: true, sameSite: 'none', secure: true, domain: ".netlify.app/"})
    res.cookie("email", user.email, {encode: String, maxAge: 1000*6*10, httpOnly: true, sameSite: 'none', secure: true, domain: ".netlify.app/"})
    res.cookie("name", user.name, {encode: String, maxAge: 1000*6*10, httpOnly: true, sameSite: 'none', secure: true, domain: ".netlify.app/"})
    res.cookie("role", user.role, {encode: String, maxAge: 1000*6*10, httpOnly: true, sameSite: 'none', secure: true, domain: ".netlify.app/"})

    //redirect back to client
    res.redirect(process.env.SITE_REDIRECT)
}

module.exports = {
    googleAuthhander,
}