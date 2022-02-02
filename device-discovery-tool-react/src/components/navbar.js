import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Navbar(props)
{
    return (
        <div className='navbar'>
            <h1>STAPL Solutions</h1>
            <div className='navbar-controls'>
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
        </div>
    )
}

export default Navbar;