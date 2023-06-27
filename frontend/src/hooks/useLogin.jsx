import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useArticleContext } from "./useArticles"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()

    const navigate = useNavigate()

    const { login } = useAuthContext()
    const { URL } = useArticleContext()
    const { setAlert } = useGlobalNotificationContext()

    const logIn = async (email, password) => {
        setLoading(true)
        try {

            const res = await axios.post(`${URL}/users/signin`, {
                email,
                password
            })

            login(res.data)
            navigate('/articles')
        }
        catch(err) {
            if(err.response) {
                setAlert({
                    severity: 'error',
                    message: err.response.data.err
                })
            }
            else {
                console.log(err);
                setAlert({
                    severity: 'error',
                    message: 'Doslo je do greske, proverite vasu internet konekciju i pokusajte ponovo'
                })
            }
        }

        setLoading(false)
    }

    return { error , loading, logIn }
}