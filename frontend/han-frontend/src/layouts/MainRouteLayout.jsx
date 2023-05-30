import { Outlet } from "react-router-dom";
import Basket from "../comonents/Basket/Basket";
import Navbar from "../comonents/Navbar/Navbar";

const MainRouteLayout = () => {
    return ( 
        <>
            <Navbar />
            <main>
                <Outlet />
                <Basket/>   
            </main>
        </>
     );
}
 
export default MainRouteLayout;