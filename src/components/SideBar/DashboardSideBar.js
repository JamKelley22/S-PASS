import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const DashboardSideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='brown'>
      <h3 id='center' id='brownText'>
      <Link to={'/Project'}>
        <i id='brownText' className="fa fa-arrow-left"/>
      </Link>
      Projects</h3>
    </div>

    <div className='sideContent'>


        <div>
          <div id='designTab'><h4><i id='whiteText' className="fa fa-cube"/> Design</h4></div>
        </div>


      <LinkContainer to={'/SPASS/About'}>
        <div>
          <div id='spassTab'><h4><i id='whiteText' className="fa fa-leaf"/> SPASS <i className="fa fa-angle-double-right"/></h4></div>
        </div>
      </LinkContainer>


        <div>
          <div id='matTab'><h4><i id='whiteText' className="fa fa-wrench"/> MAT</h4></div>
        </div>


      <LinkContainer to={'/Dashboard/Settings'}>
        <div>
          <div id='settingsTab'><h4><i className="fa fa-list"/> Settings</h4></div>
        </div>
      </LinkContainer>
    </div>
  </div>
)
export default DashboardSideBar;
