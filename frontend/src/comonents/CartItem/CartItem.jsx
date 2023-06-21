import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import { useArticleContext } from "../../hooks/useArticles";
import Delete from "@mui/icons-material/Delete"
import { Close } from "@mui/icons-material";
import { useCart } from "../../hooks/useCart";

const CartItem = ({ order }) => {

    const { URL } = useArticleContext(0)
    const { removeItem } = useCart()

    return (
    <>
    {  order.article &&
        <Container sx = {{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        borderRadius: '18px',
                        backgroundColor: 'secondary.main'
                        }}
                        >
            <Avatar src= {`${URL}/${order.article.url}`}/>
            <Box>
                <Typography variant="caption" component='p'>
                    { order.article.name }
                </Typography>
                <Typography variant="caption" component='p'>
                { order.quantity }
                </Typography>
                <Typography variant="caption" component='p'> 
                    { order.quantity * order.article.price + 'din'}
                </Typography>
            </Box>
            <IconButton
                sx = {{
                    marginLeft: 'auto',
                }}
                onClick = { e => {
                removeItem(order.article._id)
            } }>
                <Close 
                color="primary"   
                />
            </IconButton>
        </Container>
}
    </> );
}
 
export default CartItem;