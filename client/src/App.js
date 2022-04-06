import "./App.css";
import "antd/dist/antd.css";

import React from "react";


// React router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";

// Header
import Header from "./components/header/header";

// MainContent holder


function App() {
  const backgroundColor = "#ffffff";
  return (
    <Router>
      <div
        style={{ backgroundColor: backgroundColor }}
        className="mainLayout"
      >
        <Header buttonColor={backgroundColor} className="mainHeader"></Header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// function App () {
//   return (
//   <Router>
//       <Navbar>
//       </Navbar>
//       <Routes>
//     <Route exact path="/" element={<Home/>} />
//     <Route path="/about" element={<About/>} />
//     <Route path="/*" element={<Error/>} />

//     </Routes>
//   </Router>
//   )
// };
