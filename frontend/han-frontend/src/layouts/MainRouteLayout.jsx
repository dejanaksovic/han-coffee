import { Outlet } from "react-router-dom";
import Basket from "../comonents/Basket/Basket";
import Navbar from "../comonents/Navbar/Navbar";

import { Box, Fab } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../hooks/useCart";


const MainRouteLayout = () => {

    const { setShown } = useCart()

    return ( 
        <>
            <Navbar />
            <main>
                <Outlet />
                <Basket/>
                <Box xs = { {position: 'absolute', height: '100vh'} }>
                    <Fab color = 'primary'
                    sx = {{ position: 'absolute', zIndex: '3000', bottom: '20px', left: '20px' }}
                     onClick={ () => { setShown( (prevState) => !prevState ) }}
                    >
                        <ShoppingCart />
                    </Fab>    
                </Box>
            </main>
        </>
     );
}
 
export default MainRouteLayout;