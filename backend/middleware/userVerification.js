const User = require('../models/User')

const adminVerification = async (req, res, next) => {

    try {
        const user = await User.findById(req.userId)
        if(!user) {
            return res.status(404).json({
                err: "User doesn't exist"
            })
        }

        if(user.role !== "ADMIN")
            return res.status(403).json({
                err:"No permission"
            })

        next()
    }

    catch(err) {
        return res.status(500).json({
            err: "Internal server error"
        })
    }
}

const workerVerification = async (req, res, next) => {
    const { userId } = req

    if(!userId)
        return res.status(401).json({
            err:"No authorization"
        })

    try {
        const user = await User.findById(userId)
        if(!user)
            return res.status(404).json({
                err: "User not found"
            })

        if(user.role !== "WORKER")
            return res.status(403).json({
                err: "No permission"
            })

        next()
    }

    catch(err) {
        return res.status(500).json({
            err: "Internal server error"
        })
    }
}

module.exports = {
    adminVerification,
    workerVerification
}