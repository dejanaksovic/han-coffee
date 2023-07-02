import { createContext } from "react";
import { getUserFromUrl } from "../utilities/getUserFromUrl";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const authContext = createContext()

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useLocalStorage('user', getUserFromUrl(), Date.now() + 3.154e+10)

    const logout = () => {
        setUser(null)
        //set the default location name
        location.href = location.href.replace( location.search, "")

        //clearAll cache
        localStorage.clear()
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