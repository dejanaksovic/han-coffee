import { createContext, useState } from "react";

const cartContext = createContext()

const CartContextProvider = ({children}) => {
    const [ items, setItems ] = useState([])

    const [shown, setShown] = useState(false)

    const addItem = (item) => {
        setItems( (items) => {
            const found = items.find( (e) => {
                return e.article._id === item._id 
            } )

            if(!found) {
                return [...items, { article: item, quantity: 1 }]
            }

            return [ ...items.filter( e => e.article._id !== item._id ), {...found,  quantity: found.quantity + 1}]
        } )
    }

    const removeItem = (id) => {
        setItems( items.filter ( e => 
            e.article._id !== id
         ) )
    }

    const getItemsNumber = () => {
        return items.reduce((acc, e) => {
            return acc + e.quantity
        }, 0)
    }

    const emptyBasket = () => {
        setItems([])
    }
    
    return (
        <cartContext.Provider value={ {addItem, items, emptyBasket, shown, setShown, removeItem, getItemsNumber} }>
            { children }
        </cartContext.Provider>
    )
} 

export default CartContextProvider
export { cartContext }