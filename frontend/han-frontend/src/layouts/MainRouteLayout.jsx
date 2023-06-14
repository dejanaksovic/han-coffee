import "./MainRouteLayout.css"

import { Outlet } from "react-router-dom";
import Basket from "../comonents/Basket/Basket";
import Navbar from "../comonents/Navbar/Navbar";
import GlobalNotification from "../comonents/GlobalNotification/GlobalNotification";
import { Box, Fab } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../hooks/useCart";


const MainRouteLayout = () => {

    const { setShown } = useCart()

    return ( 
        <Box sx = {{
            minHeight: '100vh',
        }}>
            <div className="bg-image"></div>
            <Fab color = 'secondary'
                        style = {{
                            position: 'fixed',
                            bottom: '30px',
                            left: '30px',
                            zIndex: '10000',
                        }}
                        onClick={ () => { setShown( (prevState) => !prevState ) }}
                        >
                        <ShoppingCart color="neutral"/>
            </Fab>   
            <Navbar />
            <main>                   
                <Outlet />
                <Basket/>    
                <GlobalNotification />
            </main>            
        </Box>
     );
}
 
export default MainRouteLayout;