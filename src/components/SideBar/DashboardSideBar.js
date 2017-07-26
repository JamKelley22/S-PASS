import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const DashboardSideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='brown'>
      <h2 id='center' id='noBottomMargin'>Tools</h2>
    </div>

    <div className='sideContent'>

      <LinkContainer to={'/Dashboard/Design'}>
        <div>
          <div id='designTab'><h4><Glyphicon glyph="inbox"/> Design</h4></div>
        </div>
      </LinkContainer>

      <LinkContainer to={'/SPASS/Overview'}>
        <div>
          <div id='spassTab'><h4><Glyphicon glyph="leaf" /> SPASS</h4></div>
        </div>
      </LinkContainer>

      <LinkContainer to={'/Dashboard/MAT'}>
        <div>
          <div id='matTab'><h4><Glyphicon glyph="wrench"/> MAT</h4></div>
        </div>
      </LinkContainer>

      <LinkContainer to={'/Dashboard/Settings'}>
        <div>
          <div id='settingsTab'><h4><Glyphicon glyph="list"/> Settings</h4></div>
        </div>
      </LinkContainer>
    </div>
  </div>
)
export default DashboardSideBar;
