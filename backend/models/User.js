const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    role: { type: String, enum: ["ADMIN", "WORKER", "USER"], default: "USER"},
    email: { type: String, unique: true, required: true },
    password: String,
    picture: String,
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User