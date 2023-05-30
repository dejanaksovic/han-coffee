import './Articles.css'

import { useEffect } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from "../../hooks/useCart";

import Article from "../../comonents/Article/Article";

const Articles = () => {

    const { error, loading, getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    const { addItem } = useCart()

    const fetchdata = async () => {
        await getArticles()
        await console.log(articles);
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return ( 
        <div className='articles-container'>
            {articles ?
            articles.map( e => <Article article={ e } key={e._id} func={addItem} /> ) :
            null}        
        </div>
     );
}
 
export default Articles;