import React from "react";
import "./header.css";
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { showSidemenu, hideSidemenu } from '../../redux/reducers/sidemenu'




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
    const sidemenu = useSelector((state) => state.sidemenu)
    const dispatch = useDispatch()

      /**
   *
   * @param event
   */
  const handleOpenNavMenu = (event) => {
    if (sidemenu.show) {
      dispatch(hideSidemenu())
    } else {
      dispatch(showSidemenu())
    }
  }


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
        <NavLink to="/">

    <img src={Logo} alt="logo" className="mobileHeaderLogo"></img>
    </NavLink>

    </div>
    <img src={menuIcon} alt="logo" className="mobileHeaderMenuIcon" onClick={handleOpenNavMenu}></img>

 
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
