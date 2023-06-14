import { useEffect, useState } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useArticleContext } from "../../hooks/useArticles";

const Orders = () => {
    let interval = null
    
    const { orders } = useOrders()
    const { getOrders, loading, error } = useGetOrders()
    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    useEffect( () => {
        getOrders()
        getArticles()
    }, [] )

    useEffect( () => {
        if(!interval)
            setTimeout( () => {
                getOrders()
                console.log('refresh');
            }, 30*1000 )
    }, [orders] )

    return ( 
        <>
            { orders.length > 0 && articles ? 
              orders.map( order => (<Order key={order._id} order={ order }/>) ) :
              null
            }
        </>
     );
}
 
export default Orders;