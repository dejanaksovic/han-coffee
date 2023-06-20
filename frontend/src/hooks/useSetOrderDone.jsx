import { useState } from "react"
import axios from "axios"
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { useAuthContext } from "./useAuthContext"

export const useSetOrderDone = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { setAsDone } = useOrders()
    const { user } = useAuthContext()

    const { URL } = useArticleContext()

    const setDone = async (id) => {

        setLoading(true)

        try {
            const res = await axios.put( `${URL}/orders/${id}`,{}, {
                headers: {
                    Authorization: `Bearer ${user.token}`
            }})
            setAsDone(id)
            console.log(res); 
        }
        catch(err) {
            console.log(err);
        }

        setLoading(false)
    }

    return { error, loading, setDone }
}