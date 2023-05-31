import { useAuthContext } from '../../hooks/useAuthContext';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const { user } = useAuthContext()
    console.log(user);

    return ( <>
        <nav>
            <ul className='main-nav'>
                <li>
                    <NavLink to={'/articles'}>Artikli</NavLink>
                </li>
                <li>
                    <NavLink to={'/orders'}>Porudzbine</NavLink>
                </li>
                <li>
                    <NavLink to={'/articles/create'}> Kreiraj artikal </NavLink>
                </li>
                <li>
                    <NavLink to={'/register'}>Registruj se</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>LOGIN</NavLink>
                </li>
            </ul>
        </nav>
    </> );
}
 
export default Navbar;