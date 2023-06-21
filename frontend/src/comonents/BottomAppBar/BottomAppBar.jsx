import { AppBar, Toolbar, TextField, IconButton, Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../hooks/useCart";

const BottomAppBar = () => {

    const { setShown, shown, getItemsNumber } = useCart()

    return ( 
        <AppBar position="fixed" color = "secondary" sx = {{
            top: 'auto',
            bottom: 0,
        }}>
            <Toolbar>
                <Badge badgeContent = {
                    getItemsNumber()
                } color="error" >
                    <IconButton onClick = {() => {
                        setShown(!shown)
                    }}
                    sx = {{
                        position: 'static',
                        zIndex: '100000'
                    }}>
                        <ShoppingCart color="neutral"/>
                    </IconButton>
                </Badge>
            </Toolbar>
        </AppBar>
     );
}
 
export default BottomAppBar;