import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import PhaseOne from './PhaseOne/PhaseOne.js';
import SideBar from './SideBar/Sidebar.js';
import Home from './Home/Home.js';
<<<<<<< HEAD
import TopNav from './SideBar/navbar.js';
import Breadcrumbs from './breadcrumbs.js';
=======
import './App.css';
>>>>>>> masashi
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';


const App = () => (
  <Grid>
    <PageHeader>
      <TopNav/>
    </PageHeader>
<<<<<<< HEAD
    <Breadcrumbs/>
    <Row>
=======
    <Row className="test">
>>>>>>> masashi
      <Col xs={3} md={3}>
        <SideBar/>
      </Col>
      <Col xs={9} md={9}>
<<<<<<< HEAD
        <Route exact path="/" component={Home}/>
        <Route path="/Layout" component={Layout}/>
        <Route path="/MasashiRouter" component={MasashiRouter}/>
        <Route path="/Home" component={Home}/>
=======
        <div className="pre-scrollable">
          <Route exact path="/" component={Home}/>
          <Route path="/Layout" component={Layout}/>
          <Route path="/MasashiRouter" component={MasashiRouter}/>
          <Route path="/PhaseOne" component={PhaseOne}/>
        </div>
>>>>>>> masashi
      </Col>
    </Row>
  </Grid>
)

export default App;
