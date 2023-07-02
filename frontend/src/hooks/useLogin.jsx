import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useArticleContext } from "./useArticles"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [ loading, setLoading ] = useState()

    const navigate = useNavigate()

    const { login } = useAuthContext()
    const { URL } = useArticleContext()
    const { makeAlert } = useGlobalNotificationContext()

    const logIn = async (email, password) => {
        setLoading(true)
        try {

            const res = await axios.post(`${URL}/users/signin`, {
                email,
                password
            })

            login(res.data)
            console.log(res.data.role);
            if(res.data.role === "WORKER")
                return navigate('/orders')
            navigate('/articles')
        }
        catch(err) {
            if(err.response && err.response.data) {
                makeAlert('error', `Greška pri logovanju. Greška ${err.response.data.err}`)
            }
            else {
                makeAlert('error', 'Greška pri komunikaciji sa serverom, proverite Vašu internet konekciju ili se obratite administratoru')
            }
        }

        setLoading(false)
    }

    return { loading, logIn }
}