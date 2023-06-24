import './Basket.css'
import { useCart } from "../../hooks/useCart";
import { useCreateOrder } from "../../hooks/useAddOrder";
import { Button, Drawer, Typography, Box } from '@mui/material';
import CartItem from '../CartItem/CartItem';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
    const { shown, items, emptyBasket, setShown } = useCart()
    const { loading, createOrder } = useCreateOrder()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    return ( 
        <>
            <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            color: 'white',
            minWidth: '70vw',
            padding: '1rem',
            backgroundColor: 'primary.main',
            borderRadius: '0 20px 20px 0'      
          },
        }}
        anchor="left"
        open={shown}
        onClose = { () => {
            setShown(!shown)
        } }
      >
        <Box
            sx = {{
                border: 10,
                height: '100%',
                padding: 3,
                borderColor: 'secondary.main',
                borderRadius: 'inherit'
            }}
        >
            {   items &&
                items.map ( (e, i) => {
                    return (<div key = { i } >
                    <CartItem order={ e }/>
                    </div>)
                } )
            }
            <Typography variant = "body1"
                        align='center'
                        sx = {{
                marginTop: '1rem',
            }}> {
                items.length === 0 ? 
                "Korpa je prazna, narucite nesto" :
                "Ukupno:" +  items.reduce( (acc, e) => {
                    return acc + e.article.price * e.quantity
                }, 0 ) + "din"
                }
            </Typography>
            {
            <Button variant = "contained"
                    disabled = { loading || items.length === 0 }
                    sx = { {
                        display: 'block',
                        color: 'white',
                        margin: '0 auto',
                        marginTop: '1rem',
                    }
                    }
                    color='secondary'
                    onClick = { e => {
                        console.log(user);
                        if(!user)
                            {
                                navigate('/login')
                                setShown(false)
                                return
                            }
                        createOrder(items)
                        emptyBasket()
                    } }
            >
                Poruci!
            </Button>
            }
        </Box>
      </Drawer>
        </>
     );
}
 
export default Basket;