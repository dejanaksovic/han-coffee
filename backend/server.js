const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')

const Connect = require('./config/db')
Connect()

app.use(express.static('images'))

app.use(cors())
app.use(fileUpload({
    createParentPath: true,
}))
app.use(express.json())
app.use(express.urlencoded())

//ROUTERS
const articleRouter = require('./routers/articleRouter')
const orderRouter = require('./routers/orderRouter')
const userRouter = require('./routers/userRouter')
const authRouter = require('./routers/authRouter')

app.use('/articles', articleRouter)
app.use('/orders', orderRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(3000, () => {
    console.log("WORKING");
})