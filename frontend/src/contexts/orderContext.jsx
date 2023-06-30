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

    return ( 
        <orderContext.Provider value={ {setOrders, addOrder, orders, setAsDone, deleteOrderById} }>
            {children}
        </orderContext.Provider>  
     );
}
 
export default OrderContextProvider;
export { orderContext }