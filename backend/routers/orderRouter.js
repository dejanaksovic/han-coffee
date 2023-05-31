const express = require('express')
const orderRouter = express.Router()

const { getOrders, createOrder, markAsDone } = require('../controllers/orderController.js')

const tokenVerification = require('../middleware/tokenVerification.js')
const { workerVerification } = require('../middleware/userVerification.js')

orderRouter.get('/', tokenVerification, workerVerification, getOrders)
orderRouter.post('/', tokenVerification, createOrder)
orderRouter.put('/:id', tokenVerification, workerVerification, markAsDone)

module.exports = orderRouter
