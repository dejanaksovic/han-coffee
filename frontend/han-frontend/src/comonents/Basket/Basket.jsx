import './Basket.css'
import { useCart } from "../../hooks/useCart";
import { useCreateOrder } from "../../hooks/useAddOrder";
import { Button, Divider, Drawer, Typography } from '@mui/material';
import { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';

const Basket = () => {
    const { shown } = useCart()
    const { items } = useCart()

    const { error, loading, createOrder } = useCreateOrder()

    useEffect( () => {
        console.log(items)
    }, [items] )

    return ( 
        <>
            <Drawer
        sx={{
          flexShrink: 0,
          padding: '1rem',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            padding: '1rem'
          },
        }}
        variant="persistent"
        anchor="left"
        open={shown}
      >
        {   items &&
            items.map ( (e, i) => {
                return (<div key = { i } >
                <CartItem order={ e }/>
                <Divider/>
                </div>)
            } )
        }
        <Typography variant = "body1" sx = {{
            marginTop: '1rem'
        }}>
            Ukupno: { items.reduce( (acc, e) => {
                return acc + e.article.price * e.quantity
            }, 0 ) }din
        </Typography>
        {
        <Button variant='outlined'
                disabled = { loading || items.length === 0 }
                sx = { {
                    display: 'block',
                    margin: '0 auto',
                    marginTop: '1rem',
                }
                }
                onClick = { e => {
                    createOrder()
                } }
        >
            Poruci
        </Button>
}
      </Drawer>
        </>
     );
}
 
export default Basket;