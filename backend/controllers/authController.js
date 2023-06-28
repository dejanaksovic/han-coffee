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
    res.cookie("accessToken", accessToken, {
        maxAge: 3600000,
        httpOnly: true,
        sameSite: 'Lax',
        domain: 'https://han-frontend.onrender.com/'
      });
      
      res.cookie("refreshToken", refreshToken, {
        maxAge: 3600000,
        httpOnly: true,
        sameSite: 'Lax',
      });
      
      res.cookie("email", user.email, {
        maxAge: 3600000,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        domain: 'https://onernder.com'
      });

      res.cookie("role", user.role, {
        maxAge: 36000,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        domain: process.env.RENDER_EXTERNAL_HOSTNAME 
      })
      
      // Redirect to the frontend
      res.redirect('https://han-frontend.onrender.com');
}

module.exports = {
    googleAuthhander,
}