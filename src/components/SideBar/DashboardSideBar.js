import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const ProjectSideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='green'>
      <h2 id='center'>Phases</h2>
    </div>

    <div className='sideContent'>

      <LinkContainer to={'/Project/Dashboard/Design'}>
        <Panel header={'Design'}/>
      </LinkContainer>

      <LinkContainer to={'/Project/Dashboard/SPASS'}>
        <Panel header={'SPASS'}/>
      </LinkContainer>

      <LinkContainer to={'/Project/Dashboard/MAT'}>
        <Panel header={'MAT'}/>
      </LinkContainer>

      <LinkContainer to={'/Project/Dashboard/Settings'}>
        <Panel header={'Settings'}/>
      </LinkContainer>
    </div>
  </div>
)
export default ProjectSideBar;
