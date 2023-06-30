import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useDeleteArticles = () => {
    const [loading, setLoading] = useState(false)
    const { URL, deleteArticleById } = useArticleContext()
    const { makeAlert } = useGlobalNotificationContext()
    const { user } = useAuthContext()

    const deleteArticle = async ( id ) => {
        setLoading(true)
        try {
            const res = await axios.delete(`${URL}/articles/${id}`, { 
                headers: {
                    Authorization: getVerificationString(user)
                }
            })
            deleteArticleById(id)
            makeAlert( 'success', `Artikal ${res.data.article.name} uspesno obrisan` )
        }
    
    catch(err) {
        if(err.response) {
            makeAlert('error', `Artikal nije obrisan, greska: ${err.response.data.err}`)
        }
        else {
            makeAlert('error', 'Greska pri komunikaciji sa serverom, proverite vasu internet konekciju ili se obratite administratoru')
        }
    }
    
    setLoading(false)
}

    return { loading, deleteArticle }
}