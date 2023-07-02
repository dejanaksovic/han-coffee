import { useEffect, useState } from "react"
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import axios from "axios"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useGetOrders = () => {
    const [loading, setLoading] = useState(false)
    const { makeAlert } = useGlobalNotificationContext()
    const { URL } = useArticleContext()

    const { setOrders } = useOrders()

    const { user, updateToken } = useAuthContext()

    const getOrders = async () => {

        setLoading(true)
        try {
        const res = await axios.get(`${URL}/orders`, {
            headers: {
                Authorization: getVerificationString(user),
            }
        })
        if(res.data.newToken)
                updateToken(res.data.newToken)
        setOrders(res.data.orders)
        }
        catch(err) {
            console.log(err)
            if(err.response) {
                makeAlert('error', `Ne mogući pregled porudžbina, greška ${err.response.err}`)
            }
            else {
                makeAlert('error', 'Greška pri komunikaciji sa serverom, proverite Vašu internet konekciju ili se obratite administratoru')
            }
        }

    setLoading(false)
    }

    return { loading, getOrders }
}