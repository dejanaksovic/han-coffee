import { useContext } from "react"
import { authContext } from "../contexts/authContext"

export const useAuthContext = () => {
    const context = useContext(authContext)
    if(!context)
        throw Error("Auth context must be used inside auth context provider")

    return context
}