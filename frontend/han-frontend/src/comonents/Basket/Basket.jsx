import { useState } from "react";

const Basket = ({ addToBasket }) => {

    const [items, setItems] = useState([{article: {name: "Test", price: 10}, quantity: 10}])

    return ( 
        <div>
            <h1>KORPA</h1>
            { items.length > 0 &&
                items.map( (e, i) => {
                    return <p key={i}> {e.article.name} {e.quantity} {e.quantity * e.article.price} </p>
                } )
            }
            <button>ORDER</button>
        </div>
     );
}
 
export default Basket;