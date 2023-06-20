import { useState } from "react"
import axios from 'axios'
import { useArticleContext } from "./useArticles"
import { useOrders } from "./useOrders"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useCreateOrder = () => {
    const [ loading, setLoading ] = useState(false)
    const { URL } = useArticleContext()
    const { addOrder } = useOrders()
    const { user } = useAuthContext()
    const { setAlert } = useGlobalNotificationContext()

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
            addOrder(res.data)
            setAlert( {
                severity: 'success',
                message: `Uspesno poslata porudzbina, broj porudzbine je\n${res.data.order.number}`,
            } )
        }

        catch(err) {
            console.log(err);
            if(err.response) {
                setAlert({
                    severity: 'error',
                    message: err.response.data.err
                })
            }
            else {
                setStatus({
                    severity: 'error',
                    message: 'Doslo je do greske, proverite vasu internet konekciju i pokusajte ponovo'
                })
            }
        }
        
        setLoading(false)
    }
    return { loading, createOrder }
}