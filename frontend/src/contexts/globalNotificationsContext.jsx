import { createContext, useState } from "react";

export const globalNotificationsContext = createContext()

const GlobalNotificationsContextProvider = ({ children }) => {

    const [ alert, setAlert ] = useState(null)

    return ( 
        <globalNotificationsContext.Provider value = {{ alert, setAlert }}>
            { children }
        </globalNotificationsContext.Provider>
     );
}
 
export default GlobalNotificationsContextProvider;