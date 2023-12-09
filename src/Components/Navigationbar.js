import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import './Navigationbar.css'


const NavigationBar = ()=>{



    return(
    <div >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={'nav-link'}  to="/">Home</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={'nav-link'} to='/about'>About</NavLink>
            <NavLink className={'nav-link'}  to='/contactUs'>Contact Us</NavLink>
          </Nav>
        
        <Nav>
            <NavLink className={'nav-link'} to='/login'>Login</NavLink>
            <NavLink className={'nav-link'} to='/register'>Register</NavLink>
        </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavigationBar;