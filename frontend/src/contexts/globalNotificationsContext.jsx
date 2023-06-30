import { createContext, useState } from "react";

export const globalNotificationsContext = createContext()

const GlobalNotificationsContextProvider = ({ children }) => {

    const [ alert, setAlert ] = useState(null)

    const makeAlert = ( severity, message ) => {
        setAlert( { severity, message } )
    }

    return ( 
        <globalNotificationsContext.Provider value = {{ alert, setAlert, makeAlert }}>
            { children }
        </globalNotificationsContext.Provider>
     );
}
 
export default GlobalNotificationsContextProvider;