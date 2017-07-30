import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const SideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='green'>
      <h2 id='noBottomMargin'>S-PASS</h2>
    </div>

    <div className='sideContent'>

      <LinkContainer to={'/SPASS/About'}>
        <div id='tab'><i className="fa fa-comment"/> About</div>
      </LinkContainer>

      <LinkContainer to={'/Phases'}>
        <div id='tab'><i className="fa fa-calendar"/> Phases</div>
      </LinkContainer>

      <LinkContainer to={'/SPASS/Files'}>
        <div id='tab'><i className="fa fa-file-text"/> Files</div>
      </LinkContainer>


    </div>
  </div>
)

export default SideBar;
