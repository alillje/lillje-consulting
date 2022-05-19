import React from 'react';
import './mobile-navbutton.css'

const MobileNavbutton = ({ name, location }) => {
    return (
        <div className="mobileNavButton" value={location}>
            {name}
        </div>
    )
}

export default MobileNavbutton;

