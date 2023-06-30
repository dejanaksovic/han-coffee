import { useEffect, useState } from "react";
import { useGetOrders } from "../../hooks/useGetOrders";
import { useOrders } from "../../hooks/useOrders";

import Order from "../../comonents/Order/Order";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useArticleContext } from "../../hooks/useArticles";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Orders = () => {
    let interval = null
    
    const { orders } = useOrders()
    const { getOrders, loading, error } = useGetOrders()
    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    useEffect( () => {
        getArticles()
        getOrders()
    }, [] )

    useEffect( () => {
        if(interval) // FOR DEVELOPMENT, CHECK IF IT NEEDS TO BE REMOVED IN PRODUCTION
            return
        interval = setInterval( () => {
            getOrders()
            console.log('refreshing')
        }, 30000 )
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
                    backgroundColor: 'primary.main'
                }}
                elevation={5}>
                    <Typography variant="h1" color={'neutral.main'}>
                        Nezavrsene
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
                    <Typography variant="h1" color={'neutral.main'}>Zavrsene</Typography>
                    { orders && aricles &&
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