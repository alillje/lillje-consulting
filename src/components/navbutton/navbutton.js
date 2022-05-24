import React from 'react'
import './navbutton.css'

/**
 * Nav Button Component.
 * Represents a navigation button.
 *
 * @param {object} props - React props object.
 * @param {string} props.name - A string that represents the button text.
 * @returns {React.ReactElement} - Nav Button Component.
 */
const Navbutton = (props) => {
  const { name } = props
  return (
        <div className="headerNavButton">
            {name}
        </div>
  )
}

export default Navbutton
