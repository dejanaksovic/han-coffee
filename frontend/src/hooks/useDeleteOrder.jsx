import { useState } from "react"
import axios from 'axios'
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"

export const useDeleteOrder = () => {
    const [ loading, setLoading ] = useState(false)
    const { URL } = useArticleContext()
    const { deleteOrderById } = useOrders()
    const { makeAlert } = useGlobalNotificationContext()

    const { user, updateToken } = useAuthContext()

    const deleteOrder = async (id) => {

        setLoading(true)

        try {
            const res = await axios.delete(`${URL}/orders/${id}`, {
                headers: {
                    Authorization: getVerificationString(user)
                }
            })
            deleteOrderById(id)
            if(res.data.newToken)
                updateToken(res.data.newToken)
            makeAlert( 'success', `Uspesno obrisana porudzbina broj ${res.data.order.number}` )
        }

        catch(err) {
            if(err.response) {
                makeAlert('error', `Porudzbina nije poslata, greska: ${err.response.err}`)
            }
            else {
                makeAlert('error', 'Greska pri komunikaciji sa serverom, proverite vasu internet konekciju ili se obratite administratoru')
            }
        }
        
        setLoading(false)
    }
    return { loading, deleteOrder }
}