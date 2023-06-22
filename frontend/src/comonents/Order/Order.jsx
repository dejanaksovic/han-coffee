import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'

import { useSetOrderDone } from '../../hooks/useSetOrderDone';
import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';

const Order = ({ order }) => {

    const { getArticle } = useArticleContext()
    const { loading, error, setDone } = useSetOrderDone()
   
    const handleClick = () => {
        setDone(order._id)
    }
    useEffect( () => {
        console.log(order)
        console.log(getArticle(order.articles[0].articleId))
    }, [] )

    return ( 
        <div className="order-container">
            {
                order.articles.map ( orderArticle => {
                    const article = getArticle(orderArticle.articleId)

                    return ( <>
                    <Typography variant='h6' color={'neutral.main'}>
                        {article.name} {orderArticle.quantity}
                    </Typography>
                    </> )
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
            { !order.done ? <Button color={'secondary'} variant='contained' onClick={ e => {
                setDone( order._id )
            }}>Zavrsi porudzbinu</Button> : null }
        </div>
     );
}
 
export default Order;