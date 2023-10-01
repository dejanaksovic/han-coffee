const { default: axios } = require('axios')
const User = require('../models/User')
const qs = require('querystring')
const jwt = require('jsonwebtoken')
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

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
        phoneNumberVerified: user.phoneNumber ? true : false,
        step: 1
    }
    
    // Redirect to the frontend
    if(user.phoneNumber)
        return res.redirect(`${process.env.CLIENT_URL}?${qs.stringify(valuesToSend)}`);
    return res.redirect(`${process.env.CLIENT_URL}/register?${qs.stringify(valuesToSend)}`);
}

const twilioAuth = async(req, res) => {
    // Parametri i potrebne informacije
    const { num, code } = req.body
    const { create, check } = req.query

    // Korisnik moze da samo proveri ili generise kod odjednom
    if((!create && !check) || (create && check)) 
        return res.status(400).json({
            message: "Morate da zelite da kreirate ili proverite kod"
        })
    // Kreiranje koda
    if(create) {
        try {
            const verification = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications
            .create({to: num, channel: 'sms'})
            return res.status(200).json({
                message: "Done",
            })
        }
        catch(err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal server error",
            })
        }
    }

    //Provera koda
    try {
        console.log(`${code}`);
        console.log(`Broj: ${num}`)
        const verificationCheck = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks
            .create({ to: num, code: `${code}` })
        console.log(verificationCheck)
        if(verificationCheck.status === 'approved' ){

            try {
                const user = await User.findOne({email: req.userEmail})
                console.log(user);
                user.phoneNumber = btoa(num)
                user.save()
                return res.status(200).json({
                    message:"Phone number approved",
                })
        }
        catch(err) {
            console.log(err);
            return res.status(500).json({
                err:"Internal server error"
            })
        }}

        return res.status(400).json({
            err: "Pogresan kod"
        })
    }

    catch(err) {
        console.log("ovde")
        console.log(err);
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}


module.exports = {
    googleAuthhander,
    twilioAuth
}