import { Outlet } from "react-router-dom";
import Basket from "../comonents/Basket/Basket";

const MainRouteLayout = () => {
    return ( 
        <>
            <h1>Main layout</h1>
            <main>
                <Outlet />
                <Basket/>   
            </main>
        </>
     );
}
 
export default MainRouteLayout;