import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useAuthContext } from "./useAuthContext"
import { useGlobalNotificationContext } from "./useGlobalNorificationContext"

export const useRegister = () => {
    const [error, setError] = useState()
    const { setAlert } = useGlobalNotificationContext()
    const [loading, setLoading] = useState(false)
    const { URL } = useArticleContext()
    const { user } = useAuthContext()

    const register = async (name, email, password, role) => {
        setLoading(true)
        try {
            const res = axios.post(`${URL}/users`, {
                name,
                email,
                password,
                role,
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

        setAlert("Korisnik uspesno kreiran!")
        }

        catch(err) {
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

    return { error, loading, register }
}