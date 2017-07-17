import {Switch, Route} from 'react-router-dom';
import {Button,Navbar,Nav,NavDropdown,MenuItem,NavItem,Grid,Row,Col,Thumbnail,Image} from 'react-bootstrap';
import './navbar.css'
import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <Grid>
    <Row>
      <Col xs={1}>
        <Link to="/">
        <Image className="logo" alt="coolslice" src={require('../../Images/coolslice.png')}/>
        </Link>
      </Col>
      <Nav bsStyle="pills" pullRight>
        <NavItem><Link to="/Home"><span className="navItem">Home</span></Link></NavItem>
        <NavItem><Link to="/"><span className="navItem">Resources</span></Link></NavItem>
        <NavItem><Link to="/"><span className="navItem">Project</span></Link></NavItem>
        <NavDropdown title="Account" id="accountdDropdown">
          <MenuItem><Link to="/"><span className="navItem">View</span></Link></MenuItem>
          <MenuItem><Link to="/"><span className="navItem">Login</span></Link></MenuItem>
        </NavDropdown>
      </Nav>
    </Row>
  </Grid>
)

export default NavBar;
