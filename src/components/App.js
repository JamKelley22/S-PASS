import React from 'react';
import Layout from './Layout.js';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
//
import PhaseOne from './PhaseOne/PhaseOne.js';
import PhaseTwo from './PhaseTwo/PhaseTwo.js';
import PhaseThree from './PhaseThree/PhaseThree.js';

import SideBar from './SideBar/Sidebar.js';
import Home from './Home/Home.js';
import TopNav from './SideBar/navbar.js';
import Breadcrumbs from './breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';


const App = () => (
  <Grid>
    <PageHeader>
      <TopNav/>
    </PageHeader>
    <Breadcrumbs/>
    <Row>
      <Col xs={3} md={3}>
        <SideBar/>
      </Col>
      <Col xs={9} md={9}>
        <div className="pre-scrollable">
          <Route exact path="/" component={Home}/>
          <Route path="/Layout" component={Layout}/>
          <Route path="/MasashiRouter" component={MasashiRouter}/>
          <Route path="/Home" component={Home}/>
          <Route path="/PhaseOne" component={PhaseOne}/>
          <Route path="/PhaseTwo" component={PhaseTwo}/>
          <Route path="/PhaseThree" component={PhaseThree}/>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default App;
