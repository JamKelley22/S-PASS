import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const SideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='green'>

      <Link to={'/Home'}>
        <h3 id='center' id='brownText'>
        <i id='brownText' className="fa fa-arrow-left"/>
        Home</h3>
      </Link>

    </div>

    <div className='sideContent'>

      <LinkContainer to={'/Phases/PhaseOne/Input'}>
        <div id='tab'><i className="fa fa-calendar"/> Phases</div>
      </LinkContainer>


    </div>
  </div>
)

export default SideBar;
