import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { useGlobalNotificationContext } from "../../hooks/useGlobalNorificationContext";
import { useEffect } from "react";
import { Close } from "@mui/icons-material";

const GlobalNotification = () => {

    const { alert, setAlert } = useGlobalNotificationContext()

    useEffect( () => {
        if(alert)
            setTimeout( () => {
                setAlert(null)
            }, 5*1000 )
    }, [alert] )

    return ( 
        <Box sx = {{
            position:'absolute',
            zIndex: 3000,
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)'
        }}>
        <Collapse in = {Boolean(alert)}>
            <Alert severity={alert ? alert.severity : "warning"}
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