import React from "react";
import "./header.css";
import { NavLink } from 'react-router-dom';


import { Menu } from "antd";
import Navbutton from "../navbutton/navbutton"
import Logo from './img/lillje-consulting-logo-1.svg';

/**
 * Component
 *
 * @param {*} props
 * @return {*} 
 */
const Header = (props) => {
    const { buttonColor } = props;
  return (
    <div className="headerContainer">
        <div className="headerLogo">
            <NavLink to="/">
            <img src={Logo} alt="logo" className="headerLogo"></img>
            </NavLink>
            </div> 


        <Menu className="headerMenu" mode="horizontal" defaultSelectedKeys={["Personal"]}>
        <NavLink to="/">
            <Navbutton name="Tjänster" buttonColor={buttonColor} ></Navbutton>
        </NavLink>

        <NavLink to="/om-oss">
            <Navbutton name="Om oss" buttonColor={buttonColor} ></Navbutton>
        </NavLink>

        <NavLink to="/kontakta-oss">
            <Navbutton name="Kontakt" buttonColor={buttonColor} ></Navbutton>
        </NavLink>
        </Menu>
    </div>
  );
};

export default Header;
