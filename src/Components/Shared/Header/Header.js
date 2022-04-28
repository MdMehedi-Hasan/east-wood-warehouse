import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="service">Service</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="login">Log in</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;