import "./Navbar.css"

import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { AppBar, Toolbar, Avatar, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import image from "../../assets/images/han-logo-removebg-preview.png"

const Navbar = ({toggleSideNav}) => {

    const { user } = useAuthContext()

    const [ el, setEl ] = useState(null)
    const [ open, setOpen ] = useState(false)

    const { logout } = useAuthContext()

    const navigate = useNavigate()

    return ( <>
        <nav>
            <AppBar sx = {{position: 'static',                          
                          backgroundColor: 'secondary.main'}}>
                <Toolbar sx = {{ display: 'flex', 
                                 justifyContent: 'space-between',
                                 }} >
                    <Avatar 
                    className = 'logo' 
                    src={image}
                    style={{
                        width: '100px',
                        margin: '0 0  0 -20px '
                    }}
                    onClick = { () => {
                        navigate()
                    } }
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