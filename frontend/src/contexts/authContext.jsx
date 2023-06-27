import { createContext, useState } from "react";
import { getCookieValue } from "../hooks/getCookieValue";

export const authContext = createContext()

const AuthContextProvider = ({children}) => {

    const [ user, setUser ] = useState({name: getCookieValue('name'), email: getCookieValue('email'), token: getCookieValue('accessToken'), refreshToken: getCookieValue('refreshToken')})

    const logout = () => {
        setUser(null)
    }

    const login = (user) => {
        setUser(user)
    }

    return (
        <authContext.Provider value = { { user, logout, login } }>
            { children }
        </authContext.Provider>
    )
}

export default AuthContextProvider