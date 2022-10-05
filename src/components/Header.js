import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <FontAwesomeIcon icon={faUtensils} border size='lg'></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="#home"><h3>A&B Restaurant</h3></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header