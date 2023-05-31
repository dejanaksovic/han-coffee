const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    role: { type: String, enum: ["ADMIN", "WORKER", "USER"], default: "USER"},
    email: { type: String, unique: true },
    password: String,
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User