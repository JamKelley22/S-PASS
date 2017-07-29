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

      <LinkContainer to={'/Phases/PhaseOne'}>
        <Panel header={'1. Requirements'}/>
      </LinkContainer>

      <LinkContainer to={'/Phases/PhaseTwo'}>
        <Panel header={'2. New Modules'}/>
      </LinkContainer>

      <LinkContainer to={'/Phases/PhaseThree'}>
        <Panel header={'3. Selection'}/>
      </LinkContainer>
    </div>
  </div>
)
export default ProjectSideBar;
