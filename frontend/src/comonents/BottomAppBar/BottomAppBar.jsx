import { AppBar, Toolbar, IconButton, Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../hooks/useCart";
import { useEffect, useRef, useState } from "react";

const BottomAppBar = ({setMargin}) => {

    const { setShown, shown, getItemsNumber } = useCart()
    const ref = useRef(null)
    
    useEffect(() => {
        setMargin(ref.current.offsetHeight + 10)
        console.log(ref.current.offsetHeight);
    }, [ref])

    return ( 
        <AppBar ref = {ref} position="fixed" color = "secondary" sx = {{
            top: 'auto',
            bottom: 0,
        }}
        >
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