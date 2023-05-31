import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
            </ul>
        </nav>
    </> );
}
 
export default Navbar;