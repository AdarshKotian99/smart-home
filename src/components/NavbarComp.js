import React from "react"
import smarthomelogo from "../assets/smarthome-logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarComp() {
    return (  
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="">
                <img className="d-inline-block align-top" width='30' height='30' src={smarthomelogo} alt="samrt home logo" />
                <b>Smart</b> Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Property Services</Nav.Link>
                        <Nav.Link href="#link">Home Loans</Nav.Link>
                        <Nav.Link href="#link">Help</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                        <Nav.Link href="#link" className="custom-nav-button">Free Post Property</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    )
}