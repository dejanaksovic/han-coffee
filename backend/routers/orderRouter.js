const express = require('express')
const orderRouter = express.Router()

const {getOrders, createOrder} = require('../controllers/orderController.js')

orderRouter.get('/', getOrders)
orderRouter.post('/', createOrder)

module.exports = orderRouter
