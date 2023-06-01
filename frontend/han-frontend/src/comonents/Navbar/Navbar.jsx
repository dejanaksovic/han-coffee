import { SearchOutlined } from '@mui/icons-material';
import { useAuthContext } from '../../hooks/useAuthContext';
import { AppBar, Toolbar, Avatar, Input, Box} from '@mui/material';

const Navbar = () => {

    const { user } = useAuthContext()
    console.log(user);

    return ( <>
        <nav>
            <AppBar>
                <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between'}} >
                    <Avatar src = "src/assets/images/Hancoffee logo.jpg"/>
                    <Box sx = { {backgroundColor: 'white', borderRadius: '.5rem', flexGrow: .5}}>
                        <Input sx = { {width: '100%'} } />
                    </Box>
                    <Avatar /> 
                </Toolbar>
            </AppBar>
        </nav>
    </> );
}
 
export default Navbar;