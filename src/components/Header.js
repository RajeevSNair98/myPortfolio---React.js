import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {

  


  return (
    <div className="container fixed-top p-0">
        <Navbar bg="dark"  expand="lg" style={{height:'70px'}}>
      <Container>
        <Navbar.Brand href="#home" className='text-light fw-bolder'><b>Rajeev S Nair</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-auto bg-dark">
            <Nav.Link className='links fw-bolder' href="#home">Home</Nav.Link>
            <Nav.Link className='links fw-bolder' href="#about">About</Nav.Link>
            <Nav.Link className='links fw-bolder' href="#services">Services</Nav.Link>
            <Nav.Link className='links fw-bolder' href="#projects">Projects</Nav.Link>
            <Nav.Link className='links fw-bolder' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default Header;


