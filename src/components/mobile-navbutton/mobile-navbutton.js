import React from 'react'
import './mobile-navbutton.css'

/**
 * Mobile Nav Button Component.
 * Represents a button adapted for mobile devices.
 *
 * @param {object} props - React props object.
 * @param {string} props.name - A string that represents the button text.
 * @param {string} props.location - A string that represents the button path.
 * @returns {React.ReactElement} - Mobile Nav Button Component.
 */
const MobileNavbutton = (props) => {
  const { name, location } = props
  return (
        <div className="mobileNavButton" value={location}>
            {name}
        </div>
  )
}

export default MobileNavbutton
