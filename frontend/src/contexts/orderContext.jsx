import { createContext, useEffect, useState } from 'react'

const orderContext = createContext()

const OrderContextProvider = ({ children }) => {

    const [ orders, setOrders ] = useState([])

    const addOrder = (order) => {
        setOrders( (orders) => {
            return [...orders, order]
        } )
    }

    const setAsDone = ( id ) => {
        const item = orders.filter( e => e._id === id )[0]
        item.done = true
        setOrders( [... orders.filter( e => e._id !== id ), item] )
    }

    const deleteOrderById = ( id ) => [
        setOrders( [... orders.filter( e => e._id !== id )] )
    ]

    const getOrdersWidthFlag = ( done ) => {
        if( !["done", "undone"].includes(done) )
            throw Error("Orders must be done or undone")

        if ( done === "done" )
            return orders.filter( e => e.done)
        if ( done === "undone" )
            return orders.filter( e => !e.done )
    }

    return ( 
        <orderContext.Provider value={ {setOrders, addOrder, orders, setAsDone, deleteOrderById, getOrdersWidthFlag} }>
            {children}
        </orderContext.Provider>  
     );
}
 
export default OrderContextProvider;
export { orderContext }