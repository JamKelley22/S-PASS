import {Switch, Route} from 'react-router-dom';
import {Button,Navbar,Nav,NavDropdown,MenuItem,NavItem,Grid,Row,Col,Thumbnail,Image} from 'react-bootstrap';
import './navbar.css'
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import React from 'react';

const NavBar = () => (
  <Grid>
    <Row>
      <Col xs={1}>
        <LinkContainer to="/">
        <Image className="logo" alt="coolslice" src={require('../../Images/coolslice.png')}/>
        </LinkContainer>
      </Col>
      <Nav bsStyle="pills" pullRight>

        <LinkContainer to="/Home">
          <NavItem><span className="navItem">Home</span></NavItem>
        </LinkContainer>

        <LinkContainer to="/">
          <NavItem><span className="navItem">Resources</span></NavItem>
        </LinkContainer>

        <LinkContainer to="/">
          <NavItem><span className="navItem">Project</span></NavItem>
        </LinkContainer>

        <NavDropdown title="Account" id="accountdDropdown">

          <LinkContainer to="/">
            <MenuItem><span className="navItemSmall">View</span></MenuItem>
          </LinkContainer>

          <LinkContainer to="/">
            <MenuItem><span className="navItemSmall">Login</span></MenuItem>
          </LinkContainer>

        </NavDropdown>

      </Nav>
    </Row>
  </Grid>
)

export default NavBar;
