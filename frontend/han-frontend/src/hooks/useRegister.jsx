import axios from "axios"
import { useState } from "react"
import { useArticleContext } from "./useArticles"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState()
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
        }

        catch(err) {
            console.log(err);
        }

        setLoading(false)
    }

    return { error, loading, register }
}