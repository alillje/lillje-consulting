import './header.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showSidemenu, hideSidemenu } from '../../redux/reducers/sidemenu'
import Navbutton from '../navbutton/navbutton'
import Logo from './img/lillje-consulting-logo-1.svg'
import menuIcon from './img/menu-icon.png'

/**
 * Header Component.
 * Displays a header containing navigation buttons and Logo.
 *
 * @param {string} buttonColor - Contains a string that represents a color.
 * @returns {React.ReactElement} - Admin Customer Card Component.
 */
const Header = ({ buttonColor }) => {
  const sidemenu = useSelector((state) => state.sidemenu)
  const dispatch = useDispatch()

  /**
   * Opens/Closes navigation menu when in mobile view.
   */
  const toggleMobileMenu = () => {
    if (sidemenu.show) {
      dispatch(hideSidemenu())
    } else {
      dispatch(showSidemenu())
    }
  }

  /**
   * Closes the mobile menu.
   */
  const closeMenu = () => {
    if (sidemenu.show) {
      dispatch(hideSidemenu())
    }
  }
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

    <img src={Logo} alt="logo" onClick={closeMenu} className="mobileHeaderLogo"></img>
    </NavLink>

    </div>
    <img src={menuIcon} alt="logo" className="mobileHeaderMenuIcon" onClick={toggleMobileMenu}></img>

    </div>
    </>
  )
}

export default Header

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
