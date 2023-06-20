import "./MainRouteLayout.css"

import { Outlet } from "react-router-dom";
import Basket from "../comonents/Basket/Basket";
import Navbar from "../comonents/Navbar/Navbar";
import GlobalNotification from "../comonents/GlobalNotification/GlobalNotification";
import { Box, Fab } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../hooks/useCart";
import Sidenav from "../comonents/sideNav/Sidenav";
import { useState } from "react";


const MainRouteLayout = () => {

    const { setShown } = useCart()
    const [ sideOpen, setSideOpen ] = useState(false)

    return ( 
        <Box sx = {{
            minHeight: '100vh',
            backgroundColor: 'primary.main'
        }}>   
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