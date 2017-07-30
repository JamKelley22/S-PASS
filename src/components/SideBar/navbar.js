import {Switch, Route} from 'react-router-dom';
import {Button,Navbar,Nav,NavDropdown,MenuItem,NavItem,Grid,Row,Col,Thumbnail,Image} from 'react-bootstrap';
import './navbar.css'
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import React from 'react';

const NavBar = () => (
  <div id='HSM'>
    <Grid>
      <Row>
        <Col xs={1}>
          <div style={{cursor: 'pointer'}}>
            <LinkContainer to="/">
            <Image  className="logo" alt="coolslice" src={require('../../Images/CooLSLiCE_60px.png')}/>
            </LinkContainer>
          </div>
        </Col>
        <Nav bsStyle="pills" className='bar' pullRight>

          <LinkContainer to="/Home">
            <NavItem><span className="navItem">Home</span></NavItem>
          </LinkContainer>

          <LinkContainer to="/Resources">
            <NavItem><span className="navItem">Resources</span></NavItem>
          </LinkContainer>

          <LinkContainer to="/Project">
            <NavItem><span className="navItem">Project</span></NavItem>
          </LinkContainer>

          <NavDropdown title="Account" id="accountdDropdown">

            <LinkContainer to="/View">
              <MenuItem><span className="navItemSmall">View</span></MenuItem>
            </LinkContainer>

            <LinkContainer to="/Login">
              <MenuItem><span className="navItemSmall">Login</span></MenuItem>
            </LinkContainer>

          </NavDropdown>

        </Nav>
      </Row>
    </Grid>
  </div>
)

export default NavBar;
