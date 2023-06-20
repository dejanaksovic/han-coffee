import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'

import Article from '../Article/Article';
import { useSetOrderDone } from '../../hooks/useSetOrderDone';

const Order = ({ order }) => {

    const { articles } = useArticleContext()
    const { loading, error, setDone } = useSetOrderDone()
   
    const handleClick = () => {
        setDone(order._id)
    }

    return ( 
        <div className="order-container">
            <h3>Broj porudz: {order.number}</h3>
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