const mongoose = require('mognoose')

const userSchema = mongoose.Schema({
    name: String,
    role: ["ADMIN", "WORKER"],
    password: String,
}, {timestamps: true})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel