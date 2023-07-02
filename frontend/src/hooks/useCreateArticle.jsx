import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"

export const useCreateArticle = () => {
    const [ loading, setLoading ] = useState()    
    const { user, updateToken } = useAuthContext()
    const { makeAlert } = useGlobalNotificationContext()
    const { URL, addArticle } = useArticleContext()

    const createArticle = async (name, price, desc, image, category) => {
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('price', price)
            formData.append('desc', desc)
            formData.append('image', image)
            formData.append('category', category)

            const res = await axios.post(`${URL}/articles`, formData, {
                headers: {
                    Authorization: getVerificationString(user)
                }
            })
            if(res.data.newToken)
                updateToken(res.data.newToken)
            addArticle(res.data.article)
            makeAlert( 'success', `Uspešno kreiran artikal ${res.data.article.name}` )
        }

        catch(err) {
            if(err.response) {
                makeAlert('error', `Artikal nije kreiran, greška: ${err.response.err}`)
            }
            else {
                makeAlert('error', 'Greška pri komunikaciji sa serverom, proverite Vašu internet konekciju ili se obratite administratoru')
            }
        }

        setLoading(false)
    }

    return { loading, createArticle }
}