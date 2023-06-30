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

    const updateToken = ( token ) => {
        ( user ) => {
            return {...user, token} 
        }
    }

    return (
        <authContext.Provider value = { { user, logout, login, updateToken } }>
            { children }
        </authContext.Provider>
    )
}

export default AuthContextProvider