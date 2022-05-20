import React from 'react';
import './navbutton.css'

/**
 *
 * @param props
 */
const Navbutton = (props) => {
    const { name } = props
    return (
        <div className="headerNavButton">
            {name}
        </div>
    )
}

export default Navbutton;

