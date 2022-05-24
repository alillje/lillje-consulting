import React from 'react'
import './jumbotron.css'
import { Link } from 'react-router-dom'

/**
 * Jumbotron Component.
 * Displays a jumbotron element.
 *
 * @param {object} props - React props object.
 * @param {string} props.title - A string that represents the jumbotron title.
 * @param {string} props.text - A string that represents the jumbotron text.
 * @param {string} props.buttonText - A string that represents the jumbotron button text.
 * @param {string} props.linkPath - A string that represents the jumbotron button path.
 * @returns {React.ReactElement} - Jumbotron Component.
 */
const Jumbotron = (props) => {
  const { title, text, buttonText, linkPath } = props
  return (
        <div className="jumbotronContainer">
        <h1>{title}</h1>
        <p>{text}</p>
    <Link to={linkPath}><button className="jumbotronContainerBtn">{buttonText}</button></Link>
    </div>
  )
}

export default Jumbotron
