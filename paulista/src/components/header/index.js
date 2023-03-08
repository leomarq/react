import React from 'react';
import {AreaHeader} from './styled';

function Header() {
    return(
    <div>
        <AreaHeader>
            <div className='container'>

                <div className='logo'>
                    <p>LOGO</p>
                </div>

                <nav>
                    <ul>
                        <li>Index</li>
                        <li>Sobre</li>
                    </ul>
                </nav>

            </div>
        </AreaHeader>
    </div>
    )
};

export default Header;