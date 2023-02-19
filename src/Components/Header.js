import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUser  } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >Food Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            
            
          </Nav> */}
          {/* <Form className="d-flex">
          <Button as={Link} to="/admin/adminDashboard" className='btn btn-primary btn-lg'><FontAwesomeIcon icon={faUser} /></Button>
          
          <Button as={Link} to="/cart" className='btn btn-info btn-lg mx-2'><FontAwesomeIcon icon={faCartArrowDown} /></Button>
          <Button as={Link} to="/userDashboard" className='btn btn-primary btn-lg'><FontAwesomeIcon icon={faUser} /></Button>
          <Button as={Link} to="/login" className='btn btn-success mx-2 btn-lg'>Login</Button>
          <span className=''></span>
        
          </Form> */}
          {/* as={Link} to="/" */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


export default Header