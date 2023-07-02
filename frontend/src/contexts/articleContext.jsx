import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const articleContext = createContext()

const ArticleContextProvider = ({children}) => {
    const [ articles, setArticles ] = useLocalStorage('articles', {values: []}, Date.now() + 1.2e+6)
    const URL = import.meta.env.VITE_SERVER_ENDPOINT

    const addArticle = (article) => {
        setArticles( (prevState) => {
            return { values: [...prevState.values], expiers: prevState.expiers }
        } )
    }

    const getArticle = ( id ) => {
        if(!articles || !articles.values || articles.values.length === 0)
            return null
        return articles.values.filter( e => e._id === id)[0]
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