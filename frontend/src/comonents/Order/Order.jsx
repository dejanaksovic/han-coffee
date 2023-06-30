import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'

import { useSetOrderDone } from '../../hooks/useSetOrderDone';
import { Button, Typography } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';

const Order = ({ order }) => {

    const { getArticle } = useArticleContext()
    const { setDone } = useSetOrderDone()
    const { user } = useAuthContext()

    return ( 
        <div className="order-container">
            {
                order && order.articles && order.articles.map ( (orderArticle,i) => {
                    const article = getArticle(orderArticle.articleId)

                    return (
                    <Typography key={i} variant='h6' color={'neutral.main'}>
                        {article.name} {orderArticle.quantity}
                    </Typography>
                     )
                } )
            }
            <Typography color = { 'neutral.main' } variant = {'body2'}>
                Ukupna cena: {
                    order.articles.reduce( (acc, e) => {
                        const price = getArticle( e.articleId ).price
                        return acc+price
                    }, 0 )
                }
            </Typography>
            <Typography color = {'neutral.main'}>
                Broj porudzbine: {order.number}
            </Typography>
            { !order.done && user && user.role === "WORKER" ? <Button color={'secondary'} variant='contained' onClick={ e => {
                setDone(order._id)
            }}>Zavrsi porudzbinu</Button> : null }
        </div>
     );
}
 
export default Order;