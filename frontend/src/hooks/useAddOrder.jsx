import { useState } from "react"
import axios from 'axios'
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"

export const useCreateOrder = () => {
    const [ loading, setLoading ] = useState(false)
    const { URL } = useArticleContext()
    const { addOrder } = useOrders()
    const { makeAlert } = useGlobalNotificationContext()

    const { user, updateToken } = useAuthContext()

    const createOrder = async (articles) => {

        setLoading(true)

        try {
            const res = await axios.post(`${URL}/orders`,{
                articles: articles.map( e => {
                    return { articleId: e.article._id, quantity: e.quantity }
                } )              
            }, {
                headers: {
                    Authorization: getVerificationString(user)
                }
            })
            addOrder(res.data)
            if(res.data.newToken)
                updateToken(res.data.newToken)
            makeAlert( 'success', `Uspešno poslata porudžbina, broj ove porudžbine je ${res.data.order.number}` )
        }

        catch(err) {
            if(err.response) {
                makeAlert('error', `Porudžbina nije poslata, greška: ${err.response.err}`)
            }
            else {
                makeAlert('error', 'Greška pri komunikaciji sa serverom, proverite Vašu internet konekciju ili se obratite administratoru')
            }
        }
        
        setLoading(false)
    }
    return { loading, createOrder }
}