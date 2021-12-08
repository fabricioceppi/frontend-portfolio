import React, {useState} from 'react';

function MenuIcon() {
    const [wasClicked, setState] = useState(false);
    return (
        <div role='button' className={wasClicked ? 'menu-button clicked' : 'menu-button'}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default MenuIcon;