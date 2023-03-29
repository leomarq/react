import { BsBriefcase } from 'react-icons/bs'
import { AiOutlineForm } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import './Header.css'

function Header() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/images/logoth.png" alt="Logo Tech Hub" width="150px"/>
            </div>
            <div className="button-container">
                <ul>
                    <li className="button-navbar"><BsBriefcase/></li>
                    <li className="button-navbar"><AiOutlineForm/></li>
                    <li className="button-navbar"><FiUsers/></li>
                </ul>
            </div>
        </nav>       
    )
}

export default Header;