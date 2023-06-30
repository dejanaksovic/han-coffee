import { useState } from "react"
import axios from "axios"
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { getVerificationString } from "../utilities/verificationString"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useSetOrderDone = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { makeAlert } = useGlobalNotificationContext()
    const { setAsDone } = useOrders()

    const { user, updateToken } = useAuthContext()

    const { URL } = useArticleContext()

    const setDone = async (id) => {

        setLoading(true)

        try {
            const res = await axios.put( `${URL}/orders/${id}`,{}, {
                headers: {
                    Authorization: getVerificationString(user)
            }})
            setAsDone(id)
            if(res.data.newToken)
                updateToken(res.data.newToken)
        }
        catch(err) {
            if(err.response) {
                makeAlert('error', `Porudzbina nije zavrsena, greska ${err.response.err}`)
            }
            else {
                makeAlert('error', 'Greska pri komunikaciji sa serverom, proverite vasu internet konekciju ili se obratite administratoru')
            }
        }

        setLoading(false)
    }

    return { error, loading, setDone }
}