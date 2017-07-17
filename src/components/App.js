import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import PhaseOne from './PhaseOne/PhaseOne.js';
import SideBar from './SideBar/Sidebar.js';
import Home from './Home/Home.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';



const App = () => (
  <Grid>
    <style type="text/css">{`
      .pre-scrollable {
    max-height: 85%;
    overflow-y: scroll;
}
  `}</style>

    <PageHeader>
      <Link to="/">
        S-PASS
      </Link>
    </PageHeader>
    <Row className="test">
      <Col xs={3} md={3}>
        <SideBar/>
      </Col>
      <Col xs={9} md={9}>
        <div className="pre-scrollable">
          <Route exact path="/" component={Home}/>
          <Route path="/Layout" component={Layout}/>
          <Route path="/MasashiRouter" component={MasashiRouter}/>
          <Route path="/PhaseOne" component={PhaseOne}/>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default App;
