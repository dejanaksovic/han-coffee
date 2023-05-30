import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";

export const useCart = () => {
    const context = useContext(cartContext)
    if(!context)
        throw Error("Cart context must be used inside context provider")

    return context
}