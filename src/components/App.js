import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import SideBar from './SideBar/Sidebar.js';
import Home from './Home/Home.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const App = () => (
  <Grid>
    <PageHeader>
      <Link to="/">

        <img src={require('../Images/coolslice.png')} />
      </Link>
    </PageHeader>
    <Row>
      <Col xs={3} md={3}>
        <SideBar/>
      </Col>
      <Col xs={9} md={9}>
        <Route exact path="/" component={Home}/>
        <Route path="/Layout" component={Layout}/>
        <Route path="/MasashiRouter" component={MasashiRouter}/>
      </Col>
    </Row>
  </Grid>
)

export default App;
