import { AppBar, Toolbar, TextField, IconButton } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../hooks/useCart";

const BottomAppBar = () => {

    const { setShown, shown } = useCart()

    return ( 
        <AppBar position="fixed" color = "secondary" sx = {{
            top: 'auto',
            bottom: 0,
        }}>
            <Toolbar>
                <IconButton onClick = {() => {
                    setShown(!shown)
                }}
                sx = {{
                    position: 'static',
                    zIndex: '100000'
                }}>
                    <ShoppingCart color="neutral"/>
                </IconButton>
            </Toolbar>
        </AppBar>
     );
}
 
export default BottomAppBar;