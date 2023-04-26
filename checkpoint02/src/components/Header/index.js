import './Header.css';
import { RiMovie2Line } from 'react-icons/ri';

function Header() {
    return (
        <nav className="navbar">
            <span><RiMovie2Line/></span><h1>EASY MOVIES</h1>
        </nav>
    )
}

export default Header;