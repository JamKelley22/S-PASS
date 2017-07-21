import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

const ProjectSideBar = ({match}) =>(
  <Nav bsStyle="pills" stacked>
    <NavItem>Tools</NavItem>

    <LinkContainer to={`${match}/Design`}>
      <NavItem><span className="navItem">Design</span></NavItem>
    </LinkContainer>

    <LinkContainer to={`${match}/S-PASS`}>
      <NavItem><span className="navItem">S-PASS</span></NavItem>
    </LinkContainer>

    <LinkContainer to={`${match}/MAT`}>
      <NavItem><span className="navItem">MAT</span></NavItem>
    </LinkContainer>

    <LinkContainer to={`${match}/Settings`}>
      <NavItem><span className="navItem">Settings</span></NavItem>
    </LinkContainer>
  </Nav>
)

export default ProjectSideBar;
