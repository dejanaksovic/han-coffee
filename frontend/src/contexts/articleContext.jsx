import { createContext, useState } from "react";

const articleContext = createContext()

const ArticleContextProvider = ({children}) => {
    const [ articles, setArticles ] = useState([])
    const URL = import.meta.env.VITE_SERVER_ENDPOINT

    const addArticle = (article) => {
        setArticles( (prevState) => {
            return [...prevState, article]
        } )
    }

    const getArticle = ( id ) => {
        return articles.filter( e => 
            e._id === id
        )[0]
    }

    const deleteArticleById = ( id ) => {
        setArticles(articles.filter( e => e._id !== id ))
    }

    return (
    <articleContext.Provider value={{articles, setArticles, URL, addArticle, getArticle, deleteArticleById}}>
        { children }
    </articleContext.Provider>
    )
}

export default ArticleContextProvider;
export { articleContext } 