import "./MainRouteLayout.css"

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
            minHeight: '120vh',
            backgroundColor: 'primary.main'
        }}
        >   
            <Navbar toggleSideNav={() => {
                setSideOpen(!sideOpen)
            }}/>
            <main>                   
                <Outlet />
                <Basket/>    
                <GlobalNotification />
                <Sidenav open = {sideOpen}
                         toggleOpen={ () => {
                            setSideOpen(!sideOpen)
                         } }/>
            </main>            
        </Box>
     );
}
 
export default MainRouteLayout;