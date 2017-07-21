import React from 'react';
import other from './other.css';

import {Link,Route} from 'react-router-dom';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

import Overview from './Overview.js';
import Files from './Files.js';
import About from './About.js';
//
import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThree.js';

import SideBar from '../SideBar/Sidebar.js';
import TopNav from '../SideBar/navbar.js';
import Breadcrumbs from '../breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const Home = ({match}) =>(
  <div>

    <Breadcrumbs/>
    <Row>
      <Col xs={3} md={3}>
        <SideBar match={match.url}/>
      </Col>
      <Col xs={9} md={9}>
        <div className="pre-scrollable">
          <Route path={`${match.url}/Overview`} component={Overview}/>

          <Route path={`${match.url}/PhaseOne`} component={PhaseOne}/>
          <Route path={`${match.url}/PhaseTwo`} component={PhaseTwo}/>
          <Route path={`${match.url}/PhaseThree`} component={PhaseThree}/>

          <Route path={`${match.url}/Files`} component={Files}/>
          <Route path={`${match.url}/About`} component={About}/>
        </div>
      </Col>
    </Row>

  </div>
)

export default Home;
