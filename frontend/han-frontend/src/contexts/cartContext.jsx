import { createContext, useState } from "react";

const cartContext = createContext()

const CartContextProvider = ({children}) => {
    const [ items, setItems ] = useState([])

    const addItem = (item) => {
        setItems( (items) => {
            console.log("Stize", item);
            const found = items.find( (e) => {
                return e.article._id === item._id 
            } )

            if(!found) {
                return [...items, { article: item, quantity: 1 }]
            }

            return [ ...items.filter( e => e.article._id !== item._id ), {...found,  quantity: found.quantity + 1}]
        } )
    }

    const emptyBasket = () => {
        setItems([])
    }
    
    return (
        <cartContext.Provider value={ {addItem, items, emptyBasket} }>
            { children }
        </cartContext.Provider>
    )
} 

export default CartContextProvider
export { cartContext }