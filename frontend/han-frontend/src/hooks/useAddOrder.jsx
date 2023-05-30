import { useState } from "react"
import axios from 'axios'
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"

export const useCreateOrder = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { URL } = useArticleContext()
    const { addOrder } = useOrders()

    const createOrder = async (articles) => {

        setLoading(true)

        try {
            const res = await axios.post(`${URL}/orders`, {
                articles,              
            })

            addOrder(res.data)
        }

        catch(err) {
            console.log(err);
        }
        
        setLoading(false)
    }
    return { error, loading, createOrder }
}