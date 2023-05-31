const jwt = require('jsonwebtoken')

const tokenVerification = async (req, res, next) => {

    if(!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        console.log(req.headers);

        return res.status(401).json({
            err: "No authorization"
        })
    }

    const token = req.headers.authorization.split(' ')[1]

    if(!token) {
        return res.status(401).json({
            err: "No authorization"
        })
    }

    try {
    const payload = jwt.verify(token, process.env.TOKEN_STRING)
    req.userId = payload.userId
    next()
    }
    catch( err ) {
        return res.status(401).json({
            err: "Invalid token"
        })
    }

}

module.exports = tokenVerification