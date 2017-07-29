import React from 'react';
import Layout from './Layout.js';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
//
import Overview from './Project/Overview.js';
import Files from './Project/Files.js';
import About from './Project/About.js';
import SPASS from './Project/SPASS.js'

import PhaseOne from './PhaseOne/PhaseOne.js';
import PhaseTwo from './PhaseTwo/PhaseTwo.js';
import PhaseThree from './PhaseThree/PhaseThree.js';

import Phases from './Project/Phases.js';

import Home from './Home/Home.js';
import Resources from './Resources/Resources.js';
import Project from './Project/Project.js';
import View from './View/View.js';
import Login from './Login/Login.js';


import SideBar from './SideBar/Sidebar.js';
import TopNav from './SideBar/navbar.js';
import Breadcrumbs from './breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';


const App = () => (
  <div className='main'>
    <Grid>
      <PageHeader>
        <TopNav/>
      </PageHeader>
      <Route exact path="/" component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Resources" component={Resources}/>
      <Route path="/Project" component={Project}/>
      <Route path="/View" component={View}/>
      <Route path="/Login" component={Login}/>
      <Route path="/SPASS" component={SPASS}/>

      <Route path="/Phases" component={Phases}/>
    </Grid>
  </div>


  /*<Breadcrumbs/>
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
  </Row>*/

)

export default App;
