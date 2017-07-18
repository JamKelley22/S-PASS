import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

const SideBar = () => (
  <Nav bsStyle="pills" stacked>
    <LinkContainer to="/Home">
      <NavItem><span className="navItem">Overview</span></NavItem>
    </LinkContainer>

    <NavDropdown className="navItem" title="Phases" id="Phases">
      <LinkContainer to="/PhaseOne">
        <MenuItem><span className="navItemSmall">Phase 1</span></MenuItem>
      </LinkContainer>
      <LinkContainer to="/PhaseTwo">
        <MenuItem><span className="navItemSmall">Phase 2</span></MenuItem>
      </LinkContainer>
      <LinkContainer to="/PhaseThree">
        <MenuItem><span className="navItemSmall">Phase 3</span></MenuItem>
      </LinkContainer>

    </NavDropdown>
    <LinkContainer to="/Files">
      <NavItem><span className="navItem">Project Files</span></NavItem>
    </LinkContainer>

    <LinkContainer to="/About">
      <NavItem><span className="navItem">About</span></NavItem>
    </LinkContainer>
  </Nav>
)

export default SideBar;
