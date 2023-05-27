const Order = require('../models/Order')

const getOrders = async (req, res) => {

    try {
        const orders = await Order.find()
        return res.status(200).json({
            orders
        })
    }

    catch(err) {
        return res.status(500).json({
            err,
        })
    }

}

const createOrder = async(req, res) => {

    const { articles } = req.body

    console.log(articles);

    if(!articles)
        return res.status(400).json({
            err: "bad request, no articles"
        })
    
        try {
            const order = await Order.create({
            articles
        }) 

        return res.status(200).json({
            order,
        })}

        catch(err) {
            return res.status(500).json({
                err,
            })
        }
  
}

module.exports = {
    getOrders,
    createOrder,
}