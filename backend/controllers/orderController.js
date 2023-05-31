const Order = require('../models/Order')

let globalNumber = 0

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
            globalNumber = (globalNumber+1) % 100 
            const order = await Order.create({
            articles,
            number: globalNumber,
        }) 

        return res.status(200).json({
            order,
        })}

        catch(err) {
            console.log(err);
            return res.status(500).json({
                err,
            })
        }
  
}

const markAsDone = async(req, res) => {
    const { id } = req.params
    let order;

    if(!id) 
        return res.status(400).json({
            err: "Order that is marked for done must have an id"
        })

    try {
        order = await Order.findById(id)
    }
    catch(err) {
        return res.status(500).json({
            err,
        })
    }

    if(!order)
        return res.status(404).json({
            err: "The order with that id doens't exist"
        })
    
    if(order.done) {
        return res.status(400).json({
            err: "Order is already marked as done"
        })
    }

    order.done = true
    order.save()

    return res.status(200).json({
        order,
    })
}

module.exports = {
    getOrders,
    createOrder,
    markAsDone
}