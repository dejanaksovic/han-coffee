import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { AppBar, Toolbar, Avatar, Input, Box, Menu, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { user } = useAuthContext()

    const [ el, setEl ] = useState(null)
    const [ open, setOpen ] = useState(false)

    const { logout } = useAuthContext()

    const navigate = useNavigate()

    console.log(user);

    return ( <>
        <nav>
            <AppBar sx = {{position: 'static'}}>
                <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between'}} >
                    <NavLink to = {'/articles'}>
                        <Avatar src = "src\assets\images\Hancoffee logo.jpg"/>
                    </NavLink>
                    <Box sx = { {backgroundColor: 'white', borderRadius: '.5rem', flexGrow: .5}}>
                        <Input sx = { {width: '100%'} } />
                    </Box>
                    <Avatar
                        sx = {{
                            cursor: 'pointer',
                        }}
                        onClick = { (e) => {
                        setEl(e.target)
                        setOpen(true)
                    } } />
                </Toolbar>
                <Menu
                    id = "user-menu"
                    anchorEl={ el }
                    open = { open }
                    onClose={() => {
                        setOpen(false)
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    >
                        { !user ?
                        <MenuItem onClick = { () => {
                            navigate('/login')
                            setOpen(false)
                        } } >Ulogujte se</MenuItem> :
                        null }
                        { !user ?
                        <MenuItem onClick = { () => {
                            navigate('/login')
                            setOpen(false)
                        } } >Prijavite se</MenuItem> :
                        null }
                        { user ?
                        <MenuItem onClick = { () => {
                            logout()
                            setOpen(false)
                        } } >Izlogujte se</MenuItem> :
                        null }
                    </Menu>
            </AppBar>
        </nav>
    </> );
}
 
export default Navbar;