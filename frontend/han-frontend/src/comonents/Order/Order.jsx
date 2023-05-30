import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'
import { useGetOrders } from '../../hooks/useGetOrders';

import Article from '../Article/Article';

const Order = ({ order }) => {

    const { articles } = useArticleContext()
    const { getOrders } = useGetOrders()

   

    return ( 
        <div className="order-container">
            { order && articles && order.articles ? 
                order.articles.map( article => {
                    return (  <Article key={article._id} article={ articles.find( e => e._id === article.articleId ) }/>)
                } ) :
            null
            }

            { !order.done  ? 
                <button> Zavrsi porudzbinu </button> :
                null
            }
            
        </div>
     );
}
 
export default Order;