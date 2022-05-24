import './footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Footer Component.
 * Displays a footer containing different links.
 *
 * @returns {React.ReactElement} - Admin Customer Card Component.
 */
const Footer = () => {
  return (
    <div className="footerContainer">
    <div className="footerLinksContainer">
        <div className="linksContainerLeft">
        <div><Link to="/" className="footerLink">Hem</Link></div>
        <div><Link to="/tjanster" className="footerLink">Tjänster</Link></div>
        <div><Link to="/kontakta-oss" className="footerLink">Kontakt</Link></div>

        <a href="https://customer.lilljeconsulting.com/" target="_blank" className="footerLink" rel="noopener noreferrer">Kundportal</a>

        </div>
        <div className="linksContainerRight">
        <div className="footerLink">Email: katarina.lillje@yahoo.se</div>
        <div className="footerLink">Tel: 0700 000 000</div>
        <div className="footerLink">Ingvar Vikings Väg 11</div>
        <div className="footerLink">762 71 Rimbo</div>
        </div>
    </div>
    <div className="footerLinksContainerMobile">

<div className="footerLinkMobile"><Link className="footerLinkMobile" to="/">Hem</Link></div>
        <div className="footerLinkMobile"><Link to="/tjanster" className="footerLinkMobile">Tjänster</Link></div>
        <div className="footerLinkMobile"><Link to="/kontakta-oss" className="footerLinkMobile">Kontakt</Link></div>

        <a href="https://customer.lilljeconsulting.com/" target="_blank" className="footerLink" rel="noopener noreferrer">Kundportal</a>
        <div className="footerLinkMobile">Email: katarina.lillje@yahoo.se</div>
        <div className="footerLinkMobile">Tel: 0700 000 000</div>
        <div className="footerLinkMobile">Ingvar Vikings Väg 11</div>
        <div className="footerLinkMobile">762 71 Rimbo</div>
        <div className="footerInfoMobile">
    &#169; Lillje Consulting AB Org. nr: 556829-4663
    </div>

    </div>

    <div className="footerInfo">
    &#169; Lillje Consulting AB Org. nr: 556829-4663
    </div>
    </div>
  )
}

export default Footer
