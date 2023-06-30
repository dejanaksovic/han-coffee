import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { useGlobalNotificationContext } from "../../hooks/useGlobalNorificationContext";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const GlobalNotification = () => {

    const { alert, setAlert } = useGlobalNotificationContext()
    const [ open, setOpen ] = useState(false)

    useEffect( () => {
        if(!open) { 
            setOpen(true)
            setTimeout( () => {
                setOpen(false)
            }, 5*1000 )
        }
    }, [alert] )

    return ( 
        <Box sx = {{
            position:'absolute',
            zIndex: 3000,
            width: '80%',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)'
        }}>
        <Collapse in = {open}>
            <Alert severity={alert ? alert.severity : 'warning'}
                   action = {
                    <IconButton onClick = { e => {
                        setAlert(null)
                    } }>
                        <Close/>
                    </IconButton>
                    }>
                { alert && alert.message }
            </Alert>
        </Collapse>
    </Box>
     );
}
 
export default GlobalNotification;