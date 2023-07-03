import './Basket.css'
import { useCart } from "../../hooks/useCart";
import { useCreateOrder } from "../../hooks/useAddOrder";
import { Button, Drawer, Typography, Box, IconButton } from '@mui/material';
import CartItem from '../CartItem/CartItem';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { Close } from '@mui/icons-material';

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
                display: 'flex',
                flexDirection: 'column', 
                gap: '1rem',
                borderRadius: 'inherit'
            }}
        >
        <Box>
            <IconButton sx = {{
                display: 'block',
                marginLeft: 'auto'
            }} color={'neutral'} onClick = { () => {
                setShown(false)
            } }>
                <Close/>
            </IconButton>
        </Box>
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
                "Korpa je prazna, naručite nešto" :
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
                Poruči!
            </Button>
            }
        </Box>
      </Drawer>
        </>
     );
}
 
export default Basket;