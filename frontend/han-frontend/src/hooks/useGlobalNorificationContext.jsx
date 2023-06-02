import { useContext } from "react"
import { globalNotificationsContext } from "../contexts/globalNotificationsContext"

export const useGlobalNotificationContext = () => {
    const context = useContext(globalNotificationsContext)

    if(!context)
        throw Error("Notrification ocntext must be used inside context provider")

    return context
}