import "./App.css";
// import "antd/dist/antd.css";

import React from "react";
import { AnimatePresence } from 'framer-motion'
// React router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

import Error from "./pages/error/error";

// Header
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// MainContent holder

function App() {
  const backgroundColor = "#ffffff";
  return (
    <Router>
      <div style={{ backgroundColor: backgroundColor }} className="mainLayout">
        <Header buttonColor={backgroundColor} className="mainHeader"></Header>
        <main>
          <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakta-oss" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          </AnimatePresence>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

