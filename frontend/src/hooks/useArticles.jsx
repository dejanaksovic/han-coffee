import { useContext } from "react";
import { articleContext } from "../contexts/articleContext";


export const useArticleContext = () => {
    const context = useContext(articleContext)

    if(context === undefined) {
        throw Error("Article context must be used inside article provider")
    }

    return context
}