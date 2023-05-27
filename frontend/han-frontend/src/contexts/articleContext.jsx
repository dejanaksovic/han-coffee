import { createContext, useState } from "react";

const articleContext = createContext()

const ArticleContextProvider = ({children}) => {
    console.log("From insie articleContextProvider");
    const [ articles, setArticles ] = useState(null)
    const URL = "http://localhost:3000"

    return (
    <articleContext.Provider value={{articles, setArticles, URL}}>
        { children }
    </articleContext.Provider>
    )
}

export default ArticleContextProvider;
export { articleContext } 