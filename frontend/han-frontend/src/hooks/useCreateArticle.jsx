import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"

export const useCreateArticle = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()
    
    const { URL, addArticle } = useArticleContext()

    const createArticle = async (name, price, desc) => {
        setLoading(true)
        try {
            const res = await axios.post(`${URL}/articles`, {
                name,
                price,
                desc,
            })

            console.log(res);
            addArticle(res.data.article)

        }

        catch(err) {
            console.log(err);
        }

        setLoading(false)
    }

    return { error, loading, createArticle }
}