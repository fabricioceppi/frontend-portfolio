import React from 'react';
import MenuIcon from '../icons/MenuIcon';

function NavBar() {
    return (
        <nav>
            <MenuIcon />
            <ul className='menu-items'>
                <li className='small white'>Item 1</li>
            </ul>
        </nav>
    );
}

export default NavBar;