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
import AR from './AR/AR.js';

import TopNav from './SideBar/navbar.js';
import {PageHeader,Grid} from 'react-bootstrap';



const App = () => (
  <div className='main'>
    <Grid>
        <TopNav id='topGear'/>
        <div id='below'>
          <Route exact path="/" component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Resources" component={Resources}/>
          <Route path="/Project" component={Project}/>
          <Route path="/View" component={View}/>
          <Route path="/Login" component={Login}/>
          <Route path="/SPASS/About" component={SPASS}/>
          <Route path="/Dashboard" component={Dashboard}/>
          <Route path ="/AR" component={AR}/>
          <Route path="/Phases" component={Phases}/>
        </div>
    </Grid>
  </div>

)

export default App;
