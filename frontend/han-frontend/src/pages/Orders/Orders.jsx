import { useEffect, useState } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";
import { useArticleContext } from "../../hooks/useArticles";

import Order from "../../comonents/Order/Order";

const Orders = () => {

    const { orders } = useOrders()
    const { getOrders } = useGetOrders()
    const { articles } = useArticleContext()

    const [ articleDisplay, setArticleDisplay ] = useState([])

    useEffect( () => {
        getOrders()
    }, [] )

    useEffect ( () => {
        
    }, [orders] )

    return ( 
        <>
            { orders.length > 0 ? 
              orders.map( order => (<Order order={ order }/>) ) :
              null
            }
        </>
     );
}
 
export default Orders;