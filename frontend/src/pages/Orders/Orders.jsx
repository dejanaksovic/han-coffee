import { useEffect, useRef } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useArticleContext } from "../../hooks/useArticles";
import { Grid, Paper, Typography } from "@mui/material";

import newOrder from "../../assets/sounds/newOrder.wav"

const Orders = () => {
    const newOrderSound = new Audio(newOrder)
    let interval = null
    const lastOrder = useRef(null)

    const { orders } = useOrders()
    const { getOrders } = useGetOrders()
    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    useEffect( () => {
        if(articles.values.length === 0 || articles.expires < Date.now())
            getArticles()
        getOrders()
        console.log(orders);
    }, [] )

    useEffect( () => {
        console.log("Requesting orders");
        interval = setInterval( () => {
            getOrders()
            console.log("Marking a request")
        }, 30000 )

        return () => { clearInterval(interval) }
    }, [] )

    useEffect( () => {
        if(orders.length > 0) {
            if(lastOrder && lastOrder.current !== orders[orders.length - 1]._id) {
                console.log('new different order');
                newOrderSound.play()
            }
            lastOrder.current = orders[orders.length - 1]._id
            console.log(lastOrder);
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