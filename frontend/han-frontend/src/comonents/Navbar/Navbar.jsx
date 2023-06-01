import { useAuthContext } from '../../hooks/useAuthContext';
import { AppBar, Toolbar, Avatar, Input, Box} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {

    const { user } = useAuthContext()
    console.log(user);

    return ( <>
        <nav style={ { position: 'sticky', zIndex: '20' } }>
            <AppBar>
                <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between'}} >
                    <Avatar src = "src/assets/images/Hancoffee logo.jpg"/>
                    <Box sx = { {backgroundColor: 'white', borderRadius: '.5rem', flexBasis: '30%'}}>
                        <SearchIcon/>
                        <Input />
                    </Box>
                    <Avatar /> 
                </Toolbar>
            </AppBar>
        </nav>
    </> );
}
 
export default Navbar;