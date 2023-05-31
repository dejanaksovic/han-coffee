import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"
import { useArticleContext } from "./useArticles"

export const useLogin = () => {
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState()

    const { login } = useAuthContext()
    const { URL } = useArticleContext()

    const logIn = async (email, password) => {
        setLoading(true)
        try {

            const res = await axios.post(`${URL}/users/signin`, {
                email,
                password
            })

            login(res.data)
            console.log(res.data);
        }
        catch(err) {
            console.log(err);
        }

        setLoading(false)
    }

    return { error , loading, logIn }
}