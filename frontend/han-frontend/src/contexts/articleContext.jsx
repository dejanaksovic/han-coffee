import { createContext, useState } from "react";

const articleContext = createContext()

const ArticleContextProvider = ({children}) => {
    console.log("From insie articleContextProvider");
    const [ articles, setArticles ] = useState([])
    const URL = "http://localhost:3000"

    const addArticle = (article) => {
        setArticles( (prevState) => {
            console.log(prevState);
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