const jwt = require('jsonwebtoken') 

const tokenVerification = async (req, res, next) => {
    if(!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {

        return res.status(401).json({
            err: "Ne postoji autorizacija"
        })
    }

    const token = req.headers.authorization.split(' ')[1]
    const refreshToken = req.headers.authorization.split(' ')[2]

    if(!token) {
        return res.status(401).json({
            err: "Ne postoji autorizacija"
        })
    }

    try {
        const payload = jwt.verify(token, process.env.TOKEN_STRING)
        req.userEmail = payload.email
        return next()
    }
    catch( err ) {
        if(err.message.includes('expired')) {
            // Check the refresh token
            try {
                const refreshPayload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_STRING)
                //sign a new one
                const newToken = jwt.sign({ email: refreshPayload.email }, process.env.TOKEN_STRING, { expiresIn: '5min' })
                req.newToken = newToken
                req.userEmail = refreshPayload.email
                return next()
            }
            catch( err ) {
                    return res.status(401).json({
                    err: "Korisnikova sesija za logovanje je istekla, ili uopste nije ulogovan"
                })
            }
        }
        return res.status(401).json({
            err: "Korisnikova sesija za logovanje je istekla, ili uopste nije ulogovan"
        })
    }

}

module.exports = tokenVerification