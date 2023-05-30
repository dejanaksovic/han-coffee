import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import axios from "axios"

export const useGetOrders = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { URL } = useArticleContext()

    const { setOrders } = useOrders()

    const getOrders = async () => {
        setLoading(true)
        try {
        const res = await axios.get(`${URL}/orders`)
        console.log("Porudz", res);
        setOrders(res.data.orders)
        }
        catch(err) {
            console.log(err);
        }

    setLoading(false)
    }

    return { error, loading, getOrders }
}