import { createContext, useState } from 'react'

const orderContext = createContext()

const OrderContextProvider = ({ children }) => {

    const [ orders, setOrders ] = useState([])

    const addOrder = (order) => {
        setOrders( (orders) => {
            return [...orders, order]
        } )
    }

    const setAsDone = ( id ) => {
        setOrders( (orders) => {
            const changedItem = orders.find( e => e._id === id )
            changedItem.done = true 
            return [...orders.filter( e => {
                e._id !== id
            } ), changedItem]
        } )
    }

    return ( 
        <orderContext.Provider value={ {setOrders, addOrder, orders, setAsDone} }>
            {children}
        </orderContext.Provider>  
     );
}
 
export default OrderContextProvider;
export { orderContext }