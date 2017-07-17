import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

const SideBar = () => (
  <Nav>
    <NavItem>
      <Link to="/Layout">
      <Button bsStyle="primary" block>Layout</Button>
      </Link>
    </NavItem>

    <NavItem>
      <Link to="/MasashiRouter">
        <Button bsStyle="primary" block>Masashi Test</Button>
      </Link>
    </NavItem>

    <NavItem>
    <Link to="/PhaseOne">
      <Button bsStyle="primary" block>Phase One</Button>
    </Link>
    </NavItem>
  </Nav>
)

export default SideBar;
