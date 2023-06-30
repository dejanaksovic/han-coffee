import { createContext, useState } from "react";
import { getUserFromUrl } from "../utilities/getUserFromUrl";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const authContext = createContext()

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useLocalStorage('user', getUserFromUrl())

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