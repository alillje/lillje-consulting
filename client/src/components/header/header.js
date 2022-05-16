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
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" collapseOnSelect >
                    <Container fluid>
                        <Col md="auto">
                            <Navbar.Brand href="#home" className="img-container">
                            </Navbar.Brand>
                        </Col>
                        <Col md="auto">
                            <Nav.Item>

                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Button variant="outline-info" size="lg">
                                    Search
                                </Button>
                            </Nav.Item>
                        </Col>
                        <Col md="auto">
                            <Button variant="primary" size="huge">
                                Articles
                            </Button>{' '}
                            <Button variant="primary" size="huge">
                                Timeline
                            </Button>{' '}
                            <Button variant="primary" size="huge">
                                About
                            </Button>{' '}
                        </Col>
                        <Col md="auto">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">More deets</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Dank memes
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Container>
                </Navbar>
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
