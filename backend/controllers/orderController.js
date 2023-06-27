const Order = require('../models/Order')
const User = require('../models/User')

let globalNumber = 0

const getOrders = async (req, res) => {

    const { userEmail } = req
    const { id } = req.params

    const user = await User.findOne({
        email: userEmail,
    })

    if(id) {
        const orders = await Order.findById(id)
        if(!orders)
            return res.status(400).json({
                err: "Ta porudzbina ne postoji"
            })
        return res.status(200).json({
            orders
        })
    }

    if(user.role === "WORKER") {
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

    try {
        const orders = await Order.find({
            userId: user._id,
        })

        return res.status(200).json({
            orders
        })
    }

    catch(err) {
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora"
        })
    }

}

const createOrder = async(req, res) => {

    const { articles } = req.body
    const { userEmail } = req

    if(!articles)
        return res.status(400).json({
            err: "bad request, no articles"
        })
    
        try {
            const user = await User.findOne({
                email: userEmail,
            })
            globalNumber = (globalNumber+1) % 100 
            const order = await Order.create({
            articles,
            number: globalNumber,
            userId: user._id
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

const deleteOrder = async(req, res) => {
    const { id } = req.params

    try {
        const order = await Order.findByIdAndDelete(id)

        if(!order)
            return res.status(400).json({
                err: "Ta porudzbina ne postoji"
            })
        
        return res.status(200).json({
            order
        })    
    }

    catch(err) {
        console.log(err);
        return res.status(500).json({
            err: "Unutrasnja greska, kontaktirajte administratora"
        })
    }
}

module.exports = {
    getOrders,
    createOrder,
    markAsDone,
    deleteOrder
}