const express = require('express')
const app = express()
const cors = require('cors')

const Connect = require('./config/db')
Connect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

//ROUTERS
const articleRouter = require('./routers/articleRouter')
const orderRouter = require('./routers/orderRouter')
const userRouter = require('./routers/userRouter')

app.use('/articles', articleRouter)
app.use('/orders', orderRouter)
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log("WORKING");
})