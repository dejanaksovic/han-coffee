import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useArticleContext } from "../../hooks/useArticles";
import BottomAppBar from "../../comonents/BottomAppBar/BottomAppBar";

const ArticlePage = () => {

    const { id } = useParams() 
    const { articles, URL } = useArticleContext()
    const [article, setArticle] = useState(null)

    useEffect( () => {
        console.log(id)
        articles.forEach( e => {
            console.log(e)
        } )
    }, [] )

    return ( 
        <div>
            <BottomAppBar/>
        </div>
     );
}
 
export default ArticlePage;