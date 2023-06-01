import { useState } from "react"
import axios from 'axios'
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { useAuthContext } from "./useAuthContext"
import { toast } from "react-toastify"

export const useCreateOrder = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const { URL } = useArticleContext()
    const { addOrder } = useOrders()
    const { user } = useAuthContext()

    const createOrder = async (articles) => {

        setLoading(true)

        try {
            const res = await axios.post(`${URL}/orders`,{
                articles: articles.map( e => {
                    return { articleId: e.article._id, quantity: e.quantity }
                } )              
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(res.data.order);
            addOrder(res.data)
            toast(`Vasa porudzbina je prosla sa brojem ${res.data.order.number}`)
        }

        catch(err) {
            console.log(err);
        }
        
        setLoading(false)
    }
    return { error, loading, createOrder }
}