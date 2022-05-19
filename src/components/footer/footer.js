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
    <div className="footerLinksContainer">
        <div classname="linksContainer">
        <div><Link to="/" className="footerLink">Hem</Link></div>
        <div><Link to="/Tjänster" className="footerLink">Tjänster</Link></div>
        <div><Link to="/kontakta-oss" className="footerLink">Kontakt</Link></div>

        <a href="https://lilljeconsultingcustomer.netlify.app" target="_blank" className="footerLink" rel="noopener noreferrer">Kundportal</a>

        </div>
        <div classname="linksContainer">
        <div className="footerLink">Email: katarina.lillje@yahoo.se</div>
        <div className="footerLink">Tel: 0700 000 000</div>
        <div className="footerLink">Ingvar Vikings Väg 11</div>
        <div className="footerLink">762 71 Rimbo</div>



        </div>


    </div>
    <div className="footerInfo">
    &#169; Lillje Consulting AB Org. nr: 556829-4663
    </div>
    </div>
  );
};

export default Footer;
