import { createContext, useState } from "react";

const articleContext = createContext()

const ArticleContextProvider = ({children}) => {
    const [ articles, setArticles ] = useState([])
    const URL = "http://localhost:3000"

    const addArticle = (article) => {
        setArticles( (prevState) => {
            return [...prevState, article]
        } )
    }

    return (
    <articleContext.Provider value={{articles, setArticles, URL, addArticle}}>
        { children }
    </articleContext.Provider>
    )
}

export default ArticleContextProvider;
export { articleContext } 