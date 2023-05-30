import { useEffect, useState } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";

const Orders = () => {

    const { orders } = useOrders()
    const { getOrders, loading, error } = useGetOrders()

    useEffect( () => {
        getOrders()
    }, [] )

    return ( 
        <>
            { orders.length > 0 ? 
              orders.map( order => (<Order key={order._id} order={ order }/>) ) :
              null
            }
        </>
     );
}
 
export default Orders;