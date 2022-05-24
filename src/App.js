import './App.css'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'

// Pages
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

/**
 * App Component.
 * Represents the application and contains all components.
 *
 * @returns {React.ReactElement} - App Component.
 */
function App () {
  return (
    <Router>

          <AnimatePresence exitBeforeEnter>
          <Routes>
          <Route
                exact
                path="/"
                element={<Layout><Home /></Layout>}
              />
                        <Route
                exact
                path="/kontakta-oss"
                element={<Layout><Contact /></Layout>}
              />
                                      <Route
                exact
                path="/tjanster"
                element={<Layout><About /></Layout>}
              />
          </Routes>
          </AnimatePresence>

    </Router>
  )
}

export default App
