const mongoose = require('mongoose')
require('dotenv').config()

const Connect = () => {
    console.log(process.env.RENDER_EXTERNAL_HOSTNAME)
    try {
        mongoose.connect(process.env.MONGO_URI)
    }

    catch(err) {
        console.log(err);
    }
} 

module.exports = Connect