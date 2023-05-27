const express = require('express')
const app = express()

const Connect = require('./config/db')
Connect()

//ROUTERS
const articleRouter = require('./routers/articleRouter')

app.use('/articles', articleRouter)

app.listen(3000, () => {
    console.log("WORKING");
})