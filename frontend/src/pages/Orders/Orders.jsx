import { useEffect } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useArticleContext } from "../../hooks/useArticles";
import { Grid, Paper, Typography } from "@mui/material";

const Orders = () => {
    let interval = null
    
    const { orders } = useOrders()
    const { getOrders } = useGetOrders()
    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    useEffect( () => {
        if(articles.values.length === 0 || articles.expires < Date.now())
            getArticles()
        getOrders()
    }, [] )

    useEffect( () => {
        if(!interval) {
            console.log("Requesting orders");
            interval = setInterval( () => {
                getOrders()
            }, 30000 )
        }
        //Clean up the interval at dismount
        return () => {
            if(interval)
            clearInterval(interval)
        }
    }, [] )

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