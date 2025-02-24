import { Outlet } from "react-router-dom";
import Sidenav from "../comonents/Sidenav/Sidenav";
import Basket from "../comonents/Basket/Basket";
import Navbar from "../comonents/Navbar/Navbar";
import GlobalNotification from "../comonents/GlobalNotification/GlobalNotification";
import { Box } from "@mui/material"
import { useState } from "react";

const MainRouteLayout = () => {

    const [ sideOpen, setSideOpen ] = useState(false)

    return ( 
        <Box sx = {{
            backgroundColor: 'primary.main',
            paddingBottom: '1rem',
            minHeight: '100vh',
            width: '100%',
        }}
        >   
            <main >    
                <Navbar toggleSideNav={() => {
                    setSideOpen(!sideOpen)
                }}/>
                <Sidenav open = {sideOpen}
                         toggleOpen={ () => {
                            setSideOpen(!sideOpen)
                         } }/>            
                <Outlet />   
                <Basket/>    
                <GlobalNotification />
            </main>            
        </Box>
     );
}
 
export default MainRouteLayout;