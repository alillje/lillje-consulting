import React from "react";
import "./header.css";
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'



import Navbutton from "../navbutton/navbutton"
import Logo from './img/lillje-consulting-logo-1.svg';
import menuIcon from './img/menu-icon.png';


/**
 * Component
 *
 * @param {*} props
 * @return {*} 
 */
const Header = (props) => {

    const { buttonColor } = props;
  return (
      <>
    <div className="headerContainer">
        <div className="headerLogo">
            <NavLink to="/">
            <img src={Logo} alt="logo" className="headerLogo"></img>
            </NavLink>
            </div> 


        <ul className="headerMenu">
        <NavLink to="/tjanster">
            <Navbutton name="Tjänster" buttonColor={buttonColor} ></Navbutton>
        </NavLink>

        <NavLink to="/kontakta-oss">
            <Navbutton name="Kontakt" buttonColor={buttonColor} ></Navbutton>
        </NavLink>
        </ul>
    </div>
    <div className="mobileHeaderContainer">
        <div className="mobileHeaderLogoContainer">
    <img src={Logo} alt="logo" className="mobileHeaderLogo"></img>
    </div>
    <img src={menuIcon} alt="logo" className="mobileHeaderMenuIcon"></img>

 
    </div>
    </>
  );
};

export default Header;


/* <Menu className="headerMenu" mode="horizontal" defaultSelectedKeys={["Personal"]}>
<NavLink to="/">
    <Navbutton name="Tjänster" buttonColor={buttonColor} ></Navbutton>
</NavLink>

<NavLink to="/om-oss">
    <Navbutton name="Om oss" buttonColor={buttonColor} ></Navbutton>
</NavLink>

<NavLink to="/kontakta-oss">
    <Navbutton name="Kontakt" buttonColor={buttonColor} ></Navbutton>
</NavLink>
</Menu> */
