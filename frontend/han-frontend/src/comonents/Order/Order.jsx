import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'
import { useGetOrders } from '../../hooks/useGetOrders';

import Article from '../Article/Article';
import { useSetOrderDone } from '../../hooks/useSetOrderDone';

const Order = ({ order }) => {

    const { articles } = useArticleContext()
    const { getOrders } = useGetOrders()
    const { loading, error, setDone } = useSetOrderDone()
   
    const handleClick = () => {
        setDone(order._id)
    }

    return ( 
        <div className="order-container">
            { order && articles && order.articles ? 
                order.articles.map( article => {
                    return (  <Article key={article._id} article={ articles.find( e => e._id === article.articleId ) }/>)
                } ) :
            null
            }

            { !order.done  ? 
                <button disabled = { loading } onClick={ handleClick }> Zavrsi porudzbinu </button> :
                null
            }
            
        </div>
     );
}
 
export default Order;