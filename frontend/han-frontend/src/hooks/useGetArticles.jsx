import { useState } from "react"
import { useArticleContext } from "./useArticles"
import axios from 'axios'

export const useGetArticles = () => {

    const { URL, setArticles } = useArticleContext()
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const getArticles = async () => {
        console.log("API TRIGGERED");
        setLoading(true)
        console.log(`URL: ${URL}`);

        try {
            const { data: {articles} } = await axios.get(`${URL}/articles`)
            await console.log(articles);
            await setArticles(articles)    
        }

        catch(err) {
            console.log(err);
            setError(err)
        }

        setLoading(false)
        setError(null)
    }

    return { error, loading, getArticles }
}