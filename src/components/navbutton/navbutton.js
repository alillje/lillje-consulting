import React from 'react';
import './navbutton.css'

const Navbutton = (props) => {
    const { name } = props
    return (
        <div className="headerNavButton">
            {name}
        </div>
    )
}

export default Navbutton;

