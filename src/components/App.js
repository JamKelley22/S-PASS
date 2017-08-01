import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
//
import SPASS from './Project/Dashboard/SPASS.js'
import Dashboard from './Project/Dashboard/Dashboard.js'

import Phases from './Project/Phases.js';

import Home from './Home/Home.js';
import Resources from './Resources/Resources.js';
import Project from './Project/Project.js';
import View from './View/View.js';
import Login from './Login/Login.js';

import TopNav from './SideBar/navbar.js';
import {PageHeader,Grid} from 'react-bootstrap';



const App = () => (
  <div className='main'>
    <Grid>
        <TopNav id='topGear'/>
      <div id='belowTheBelt'>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Resources" component={Resources}/>
        <Route path="/Project" component={Project}/>
        <Route path="/View" component={View}/>
        <Route path="/Login" component={Login}/>
        <Route path="/SPASS/About" component={SPASS}/>
        <Route path="/Dashboard" component={Dashboard}/>

        <Route path="/Phases" component={Phases}/>
      </div>
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
