const express = require('express')
const orderRouter = express.Router()

const { getOrders, createOrder, markAsDone, deleteOrder } = require('../controllers/orderController.js')

//MIDDLEWARES
const tokenVerification = require('../middleware/tokenVerification.js')
const phoneValidation = require('../middleware/phoneValidation.js')
const { workerVerification } = require('../middleware/userVerification.js')

orderRouter.get('/:id?', tokenVerification, getOrders)
orderRouter.post('/', tokenVerification, phoneValidation, createOrder)
orderRouter.put('/:id', tokenVerification, workerVerification, markAsDone)
orderRouter.delete('/:id', tokenVerification, workerVerification, deleteOrder)

module.exports = orderRouter
