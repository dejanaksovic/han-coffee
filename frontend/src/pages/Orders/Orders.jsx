import { useEffect, useRef } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useArticleContext } from "../../hooks/useArticles";
import { Grid, Paper, Typography } from "@mui/material";

import newOrder from "../../assets/sounds/newOrder.wav"
import { useAuthContext } from "../../hooks/useAuthContext";

const Orders = () => {
    const newOrderSound = new Audio(newOrder)
    let interval = null
    // Determines logic for workers
    const orderIds = useRef(null)
    // Determines logic for users
    const lastDoneOrder = useRef(null) 

    const { orders, getOrdersWidthFlag } = useOrders()
    const { getOrders } = useGetOrders()
    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()
    const { user } = useAuthContext()

    const doesSoundPlay = () => {
        // Should play a sound if a new order arrives for workers || Should play a sound when an order is done for users

        // Default returns because of the state async behaviour
        if(!articles || !orders || orders.length === 0)
            return false

        // Worker case
        if( user.role === "WORKER" ) {
            if(!orderIds.current)
                return false
            const lastOrderId = orders[orders.length - 1]._id
                if(orderIds.current.includes( lastOrderId ))
                    return false

        return true
        }

        // User case
        else if( user.role === "USER" ) {
            if(!orderIds.current)
                return false
            const lastOrderId = orders[orders.length - 1]._id
                if(orderIds.current.includes( lastOrderId ))
                    return false

        return true
        }

        //Just in case
        return false
    }

    useEffect( () => {
        if(articles.values.length === 0 || articles.expires < Date.now())
            getArticles()
        getOrders()
    }, [] )

    useEffect( () => {
        interval = setInterval( () => {
            getOrders()
        }, 30000 )

        return () => { clearInterval(interval) }
    }, [] )

    useEffect( () => {
        if(orders.length > 0) {
            if(doesSoundPlay()) {
                newOrderSound.play()
            }
            //If there are orders set current order id's inside a string for new order checking
            if(user.role === "WORKER") {
                orderIds.current = orders.reduce( (acc, e) => {
                    return acc + e._id
                }, "")
            }
            else if(user.role === "USER") {
                orderIds.current = getOrdersWidthFlag("done").reduce (( acc, e ) => {
                    return acc + e._id
                }, "")
            }
        }
    }, [orders] )

    return ( 
        <>
            <Grid sx = {{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                minHeight: '100vh',
                flexDirection: {
                    lg: 'row',
                    md: 'column',
                    sm: 'column',
                    xs: 'column',
                },
                maxWidth: '100vw',
            }}>
                <Paper sx = {{
                    flex: '1',
                    minHeight: '100%',
                    backgroundColor: 'primary.main',
                    padding: '1rem',
                }}
                elevation={5}>
                    <Typography variant="h1" color={'neutral.main'}>
                        Nezavršene
                    </Typography>
                    { orders && articles &&
                    orders.map( e => {
                        if(!e.done)
                        return (<Order key={e._id} order = {e}/>)}
                        )
                    }
                </Paper>
                <Paper
                    sx = {{
                        flex: '1',
                        backgroundColor: 'primary.main'
                    }}
                    elevation={5}>
                    <Typography variant="h1" color={'neutral.main'}>Završene</Typography>
                    { orders && articles &&
                        orders.map( e => {
                            if(e.done)
                                return ( <Order key = {e._id} order={e}/> )
                        } )
                    } 
                </Paper>
            </Grid>
        </>
     );
}
 
export default Orders;