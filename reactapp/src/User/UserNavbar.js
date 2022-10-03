import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from './image/download.jpg';
export default class UserNavbar extends Component {
  render() {
    return (
      <div>
          <Navbar className='navbar' variant="light" expand="lg">
            
              <Navbar.Brand href=""><img src={img1} alt="imageshown" className="brandImage"/><h2 className='brand'>Abacus Academy</h2></Navbar.Brand>
              <div></div>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link><Link className='navLink' to="/userAdmission">Admisissions</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/viewUserAdmission">View Admisissions</Link></Nav.Link>
                      <Nav.Link><Link className='navLink' to="/Logout">Logout</Link></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
         
      </Navbar>
      </div>
    )
  }
}