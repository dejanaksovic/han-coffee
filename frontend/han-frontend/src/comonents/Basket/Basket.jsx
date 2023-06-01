import { useState } from "react";
import './Basket.css'
import { useCart } from "../../hooks/useCart";
import { useCreateOrder } from "../../hooks/useAddOrder";

const Basket = ({ addToBasket }) => {

    const { shown } = useCart()
    const { items, emptyBasket } = useCart()

    const { error, loading, createOrder } = useCreateOrder()

    return ( 
        <>
            <div style={ { display: shown ? "block" : "none" } } className="cart-container">
            <h1>KORPA</h1>
            { items.length > 0 &&
                items.map( (e, i) => {
                    return <p key={i}> {e.article.name} {e.quantity} {e.quantity * e.article.price} </p>
                } )
            }
            <button disabled = {loading}
            onClick = { () => {
                createOrder(items)
                emptyBasket()
            } } 
            >ORDER</button>
        </div>
        </>
     );
}
 
export default Basket;