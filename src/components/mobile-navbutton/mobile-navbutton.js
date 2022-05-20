import React from 'react';
import './mobile-navbutton.css'

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.location
 */
const MobileNavbutton = ({ name, location }) => {
    return (
        <div className="mobileNavButton" value={location}>
            {name}
        </div>
    )
}

export default MobileNavbutton;

