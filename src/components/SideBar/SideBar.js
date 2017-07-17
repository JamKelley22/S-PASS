import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

const SideBar = () => (
  <Nav bsStyle="pills" stacked>
    <NavItem><Link to="/Home"><span className="navItem">Overview</span></Link></NavItem>
    <NavDropdown className="navItem" title="Phases">
    <MenuItem><Link to="/"><span className="navItem">Phase 1</span></Link></MenuItem>
    <MenuItem><Link to="/"><span className="navItem">Phase 2</span></Link></MenuItem>
    <MenuItem><Link to="/"><span className="navItem">Phase 3</span></Link></MenuItem>
    </NavDropdown>
    <NavItem><Link to="/"><span className="navItem">Project Files</span></Link></NavItem>
    <NavItem><Link to="/"><span className="navItem">About</span></Link></NavItem>
  </Nav>
)

export default SideBar;
