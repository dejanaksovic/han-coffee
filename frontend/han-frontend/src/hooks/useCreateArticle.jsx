import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useAuthContext } from "./useAuthContext"

export const useCreateArticle = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()
    
    const { URL, addArticle } = useArticleContext()

    const { user } = useAuthContext()

    const createArticle = async (name, price, desc, image) => {
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('price', price)
            formData.append('desc', desc)
            formData.append('image', image)

            const res = await axios.post(`${URL}/articles`, formData, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
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