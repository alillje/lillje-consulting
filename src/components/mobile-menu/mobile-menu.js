import './mobile-menu.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hideSidemenu } from '../../redux/reducers/sidemenu'
import MobileNavbutton from '../mobile-navbutton/mobile-navbutton'

/**
 * Mobile Menu Component.
 * Displays a mobile menu with buttons and links. Displayed on mobile devices.
 *
 * @returns {React.ReactElement} - Mobile Menu Component.
 */
const MobileMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  /**
   * Navigates to a specific page.
   *
   * @param {object} event - An event object.
   */
  const goToPage = (event) => {
    event.preventDefault()
    dispatch(hideSidemenu())
    navigate(event.target.getAttribute('value'))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mobileMenuContainer"
    >
      <div className="menuDiv1" onClick={goToPage}>
        <MobileNavbutton location="/" name="Hem"></MobileNavbutton>
      </div>

      <div className="menuDiv2" onClick={goToPage}>
        <MobileNavbutton location="/tjanster" name="Tjänster"></MobileNavbutton>
      </div>
      <div className="menuDiv3" onClick={goToPage}>
        <MobileNavbutton
          location="/kontakta-oss"
          name="Kontakt"
        ></MobileNavbutton>
      </div>
    </motion.div>
  )
}

export default MobileMenu
