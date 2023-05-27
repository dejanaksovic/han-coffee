const mongoose = require('mongoose')
require('dotenv').config()

const Connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    }

    catch(err) {
        console.log(err);
    }
} 

module.exports = Connect