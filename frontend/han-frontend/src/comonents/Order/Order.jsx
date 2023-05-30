import { useEffect, useState } from 'react';
import { useArticleContext } from '../../hooks/useArticles';
import './Order.css'

import Article from '../Article/Article';

const Order = ({ order }) => {

    const { articles } = useArticleContext()
    
    useEffect( () => {
        console.log("Artikli", articles);
        if(!articles)
        return
        articles.forEach( e =>{
            console.log(`${e._id}\n${order.articles[0]._id}\n${e._id.toString() == order.articles[0]._id.toString()}`);
        } )
    }, articles)

    return ( 
        <div className="order-container">
            
        </div>
     );
}
 
export default Order;