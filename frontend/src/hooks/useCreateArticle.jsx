import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useCreateArticle = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()
    const { setAlert } = useGlobalNotificationContext()
    
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

            addArticle(res.data.article)
            setAlert({
                severity: 'success',
                message: 'Artikal uspasno dodat!'
            })
        }

        catch(err) {
            if(err.response) {
                setAlert({
                    severity: 'error',
                    message: err.response.data.err
                })
            }
            else {
                setStatus({
                    severity: 'error',
                    message: 'Doslo je do greske, proverite vasu internet konekciju i pokusajte ponovo'
                })
            }
        }

        setLoading(false)
    }

    return { error, loading, createArticle }
}