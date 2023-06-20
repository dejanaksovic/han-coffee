import "./Navbar.css"

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { AppBar, Toolbar, Avatar, Input, Box, MenuItem, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Margin, Menu } from '@mui/icons-material';

const Navbar = ({toggleSideNav}) => {

    const { user } = useAuthContext()

    const [ el, setEl ] = useState(null)
    const [ open, setOpen ] = useState(false)

    const { logout } = useAuthContext()

    const navigate = useNavigate()

    console.log(user);

    return ( <>
        <nav>
            <AppBar sx = {{position: 'static',                          
                          backgroundColor: 'secondary.main'}}>
                <Toolbar sx = {{ display: 'flex', 
                                 justifyContent: 'space-between',
                                 }} >
                    <Avatar 
                    className = 'logo' 
                    src="src/assets/images/han-logo-veca.png"
                    style={{
                        width: '100px',
                        margin: '0 0  0 -20px '
                    }}
                     />
                    <IconButton
                    onClick = { () => {
                        toggleSideNav()
                    } }>
                        <Menu 
                        style={{
                            fontSize: '40px'
                        }}
                        color='neutral'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    </> );
}
 
export default Navbar;