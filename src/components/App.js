import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import SideBar from './SideBar/Sidebar.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const App = () => (
    <Grid>
    <PageHeader>
      S-PASS
    </PageHeader>
    <Row>
      <Col xs={3} md={3}>
        <SideBar/>
      </Col>
      <Col xs={9} md={9}>
        <Route path="/Layout" component={Layout}/>
        <Route path="/MasashiRouter" component={MasashiRouter}/>
      </Col>
    </Row>
  </Grid>
)

export default App

/*
<Grid>
<PageHeader>
  S-PASS
</PageHeader>
  <Row>
    <Col xs={4} md={12}>
      <Row>
        <Link to="/Layout">
        <Button bsStyle="info">Layout</Button>
        </Link>
      </Row>
      <Row>
        <Link to="/MasashiRouter">
        <Button bsStyle="primary">Masashi Test</Button>
        </Link>
      </Row>
    </Col>
    <Col>
    <Route path="/Layout" component={Layout}/>
    <Route path="/MasashiRouter" component={MasashiRouter}/>
    </Col>
  </Row>
</Grid>
*/
