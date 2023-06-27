const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    articles: [ { articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }, quantity: Number }],
    done: { type: Boolean, default: false },
    number: Number,
    userId: { type: mongoose.Types.ObjectId, ref: 'User' }
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order