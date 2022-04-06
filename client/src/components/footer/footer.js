import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';



/**
 * Component
 *
 * @param {*} props
 * @return {*} 
 */
const Footer = (props) => {
  return (
    <div className="footerContainer">
        <div classname="linksContainer">
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>

        </div>
        <div classname="linksContainer">
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>

        </div>
        <div classname="linksContainer">
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        </div>
        <div classname="linksContainer">
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        <div><Link to="/" className="footerLink">Home</Link></div>
        <div><Link to="/about" className="footerLink">About</Link></div>
        </div>

    </div>
  );
};

export default Footer;
