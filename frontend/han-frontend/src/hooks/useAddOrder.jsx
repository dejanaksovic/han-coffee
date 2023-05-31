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
            console.log(articles);
            const res = await axios.post(`${URL}/orders`, {
                articles: articles.map( e => {
                    return { articleId: e.article._id, quantity: e.quantity }
                } )              
            })
            console.log(res.data.order);
            addOrder(res.data)
        }

        catch(err) {
            console.log(err);
        }
        
        setLoading(false)
    }
    return { error, loading, createOrder }
}