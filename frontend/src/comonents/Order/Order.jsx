import { useArticleContext } from '../../hooks/useArticles';
import { useSetOrderDone } from '../../hooks/useSetOrderDone';
import { Box, Button, Typography } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDeleteOrder } from '../../hooks/useDeleteOrder';

const Order = ({ order }) => {

    const { getArticle } = useArticleContext()
    const { setDone } = useSetOrderDone()
    const { deleteOrder } = useDeleteOrder()
    const { user } = useAuthContext()

    return ( 
        <Box sx = {{
            padding: '1rem',
        }}>
            {
                order && order.articles && order.articles.map ( (orderArticle,i) => {
                    const article = getArticle(orderArticle.articleId)

                    return (
                    <Typography key={i} variant='h6' color={'neutral.main'}>
                        {article && article.name} {orderArticle && orderArticle.quantity}
                    </Typography>
                     )
                } )
            }
            <Typography color = { 'neutral.main' } variant = {'body2'}>
                Ukupna cena: { order && order.articles &&
                    order.articles.reduce( (acc, e) => {
                        const price = getArticle( e.articleId ) ? getArticle( e.articleId ).price : 0
                        return acc+price
                    }, 0 )
                }
            </Typography>
            <Typography color = {'neutral.main'}>
                Broj porudžbine: {order.number}
            </Typography>
            { !order.done && user && user.role === "WORKER" ? <Button color={'secondary'} variant='contained' onClick={ e => {
                setDone(order._id)
            }}>Označi kao gotovu</Button> : null }
            { order.done && user && user.role === "WORKER" ? <Button color={'error'} variant='contained' onClick={ e => {
                deleteOrder(order._id)
            }}>Završi porudžbinu</Button> : null }
        </Box>
     );
}
 
export default Order;