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

    console.log(user);

    //upsert the user and create a session

    //create access and refresh tokens

    //set coockies

    //redirect back to client
    res.redirect('http://localhost:5173')
}

module.exports = {
    googleAuthhander,
}