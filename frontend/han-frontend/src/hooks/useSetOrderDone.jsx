import { useState } from "react"
import axios from "axios"
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"

export const useSetOrderDone = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { setAsDone } = useOrders()

    const { URL } = useArticleContext()

    const setDone = async (id) => {

        setLoading(true)

        try {
            const res = await axios.put( `${URL}/orders/${id}`)
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