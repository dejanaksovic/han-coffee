import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import { useArticleContext } from "../../hooks/useArticles";
import Delete from "@mui/icons-material/Delete"
import { useCart } from "../../hooks/useCart";

const CartItem = ({ order }) => {

    const { URL } = useArticleContext(0)
    const { removeItem } = useCart()

    return (
    <>
    {  order.article &&
        <Container sx = {{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <Avatar src= {`${URL}/${order.article.url}`}/>
            <Box>
                <Typography variant="h6">
                    { order.article.name }
                </Typography>
                <Typography variant="p">
                    { order.article.price + 'din' }
                </Typography>
                <Typography variant="body2">
                { order.quantity }
                </Typography>
                <Typography variant="body2" > 
                    { order.quantity * order.article.price + 'din'}
                </Typography>
            </Box>
            <IconButton onClick = { e => {
                console.log(order.article._id)
                removeItem(order.article._id)
                console.log(order);
            } }>
                <Delete />
            </IconButton>
        </Container>
}
    </> );
}
 
export default CartItem;