import React from "react";

// React router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home  from "./home";
import About  from "./about";
import Error  from "./error";


// Navbar
import Navbar from "./navbar";
const ReactRouterSetup = () => {
  return (
  <Router>
      <Navbar>
      </Navbar>
      <Routes>
    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route path="/about">
      <About></About>
    </Route>
    <Route path="*">
        <Error></Error>
    </Route>
    </Routes>
  </Router>
  )
};

export default ReactRouterSetup;
