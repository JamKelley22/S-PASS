import React from 'react';
import Layout from './Layout.js';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
//
import PhaseOne from './PhaseOne/PhaseOne.js';
import PhaseTwo from './PhaseTwo/PhaseTwo.js';
import PhaseThree from './PhaseThree/PhaseThree.js';

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
  <div>
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
    </Grid>
  </div>


)

export default App;
