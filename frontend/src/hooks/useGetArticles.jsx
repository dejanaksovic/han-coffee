import { useState } from "react"
import { useArticleContext } from "./useArticles"
import axios from 'axios'
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useGetArticles = () => {

    const { URL, setArticles } = useArticleContext()
    const [ loading, setLoading ] = useState(false)
    const { makeAler } = useGlobalNotificationContext()

    const getArticles = async () => {
        setLoading(true)

        try {
            const { data: {articles} } = await axios.get(`${URL}/articles`)
            await setArticles({ values: articles })    
        }

        catch(err) {
            if(err.res && err.res.data) {
                makeAler('error', 'Ne moguće povratit listu artikala, greška')
            }
            else {
                makeAler('error', 'Greška pri komunikaciji sa serverom, proverite internet konekciju ili kontaktirajte administratora')
            }
        }
        setLoading(false)
    }

    return { loading, getArticles }
}