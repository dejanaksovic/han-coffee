import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext } from "react";

export const authContext = createContext()

const AuthContextProvider = ({children}) => {

    const [ user, setUser ] = useLocalStorage('user', null)
    
    const login = (loggedUser) => {
        setUser(loggedUser)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <authContext.Provider value = { { user, login, logout } }>
            { children }
        </authContext.Provider>
    )
}

export default AuthContextProvider