import { createContext, useState } from 'react'

const orderContext = createContext()

const OrderContextProvider = ({ children }) => {

    const [ orders, setOrders ] = useState([])

    const addOrder = (order) => {
        setOrders( (orders) => {
            return [...orders, order]
        } )
    }

    return ( 
        <orderContext.Provider value={ {setOrders, addOrder} }>
            {children}
        </orderContext.Provider>  
     );
}
 
export default OrderContextProvider;
export { orderContext }