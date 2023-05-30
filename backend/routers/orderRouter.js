const express = require('express')
const orderRouter = express.Router()

const {getOrders, createOrder, markAsDone} = require('../controllers/orderController.js')

orderRouter.get('/', getOrders)
orderRouter.post('/', createOrder)
orderRouter.put('/:id', markAsDone)

module.exports = orderRouter
