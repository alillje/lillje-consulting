import React from 'react';
import './jumbotron.css'
import { Link } from 'react-router-dom';


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

export default Jumbotron;

