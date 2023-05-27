import { useEffect } from "react";
import Article from "../../comonents/Article/Article";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";

const Articles = () => {

    const { error, loading, getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    const fetchdata = async () => {
        await getArticles()
        await console.log(articles);
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return ( 
        <>
            {articles ?
            articles.map( e => <Article name = { e.name } price={ e.price } desc={ e.desc } key={e._id}/> ) :
            null}        
        </>
     );
}
 
export default Articles;