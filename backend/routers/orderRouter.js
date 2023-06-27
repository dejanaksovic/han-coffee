const express = require('express')
const orderRouter = express.Router()

const { getOrders, createOrder, markAsDone, deleteOrder } = require('../controllers/orderController.js')

const tokenVerification = require('../middleware/tokenVerification.js')
const { workerVerification } = require('../middleware/userVerification.js')

orderRouter.get('/', tokenVerification, getOrders)
orderRouter.post('/', tokenVerification, createOrder)
orderRouter.put('/:id', tokenVerification, workerVerification, markAsDone)
orderRouter.delete('/:id', tokenVerification, workerVerification, deleteOrder)

module.exports = orderRouter
