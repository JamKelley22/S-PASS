import {Switch, Route} from 'react-router-dom';
import {Button,Nav,NavItem, NavDropdown, MenuItem, Panel, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import './SideBar.css'

const SideBar = ({match}) =>(


  <div className='sidebar'>
    <div id='green'>
      <h2 id='center'>S-PASS</h2>
    </div>

    <div className='sideContent'>

      <LinkContainer to={'/SPASS/Overview'}>
        <Panel header={'Overview'}/>
      </LinkContainer>

      {/*<Accordion>
        <Panel header="Phases" eventKey="1">
          <LinkContainer to={'/SPASS/PhaseOne'}>
            <Panel header={'1. Requirements'}/>
          </LinkContainer>
          <LinkContainer to={'/SPASS/PhaseTwo'}>
            <Panel header={'Phase Two'}/>
          </LinkContainer>
          <LinkContainer to={'/SPASS/PhaseThree'}>
            <Panel header={'Phase Three'}/>
          </LinkContainer>
        </Panel>
      </Accordion>*/}

      <LinkContainer to={'/Phases'}>
        <Panel header={'Phases'}/>
      </LinkContainer>

      <LinkContainer to={'/SPASS/Files'}>
        <Panel header={'Files'}/>
      </LinkContainer>
      <LinkContainer to={'/SPASS/About'}>
        <Panel header={'About'}/>
      </LinkContainer>
    </div>
  </div>


  /*<Nav bsStyle="pills" stacked className='sidebar'>
    <LinkContainer to={'/SPASS/Overview'}>
      <NavItem><span className="navItem"><p>Overview</p></span></NavItem>
    </LinkContainer>

    <NavDropdown className="navItem" title="Phases" id="Phases">
      <LinkContainer to={`${match}/PhaseOne`}>
        <MenuItem><span className="navItemSmall"><p>Phase 1</p></span></MenuItem>
      </LinkContainer>
      <LinkContainer to={`${match}/PhaseTwo`}>
        <MenuItem><span className="navItemSmall"><p>Phase 2</p></span></MenuItem>
      </LinkContainer>
      <LinkContainer to={`${match}/PhaseThree`}>
        <MenuItem><span className="navItemSmall"><p>Phase 3</p></span></MenuItem>
      </LinkContainer>

    </NavDropdown>
    <LinkContainer to={`${match}/Files`}>
      <NavItem><span className="navItem"><p>Project Files</p></span></NavItem>
    </LinkContainer>

    <LinkContainer to={'/SPASS/About'}>
      <NavItem><span className="navItem"><p>About</p></span></NavItem>
    </LinkContainer>
  </Nav>*/
)

export default SideBar;
