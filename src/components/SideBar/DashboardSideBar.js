import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const DashboardSideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='greenTwo'>
      <h3 id='center' id='brownText'>
      <Link to={'/Project'}>
        <i id='brownText' className="fa fa-arrow-left"/>
      </Link>
      Projects</h3>
    </div>

    <div className='sideContent'>

        <div>
          <div id='tab' className='noClick'><i id='whiteText' className="fa fa-cube"/> Design</div>
        </div>


      <LinkContainer to={'/SPASS/About'}>
        <div>
          <div id='tab'><i id='whiteText' className="fa fa-leaf"/> SPASS <i id='doubleAngle' className="fa fa-angle-double-right"/></div>
        </div>
      </LinkContainer>


        <div>
          <div id='tab' className='noClick'><i id='whiteText' className="fa fa-wrench"/> MAT</div>
        </div>


        <div>
          <div id='tab' className='noClick'><i id='whiteText' className="fa fa-list"/> Settings</div>
        </div>
    </div>
  </div>
)
export default DashboardSideBar;
