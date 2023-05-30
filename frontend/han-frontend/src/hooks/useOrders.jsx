import { useContext } from "react"
import { orderContext } from "../contexts/orderContext"

export const useOrders = () => {
    const context = useContext(orderContext)

    if(!context)
        throw Erorr("use orders must be inside orders context provider")

    return context
}