import React from 'react';
import Layout from './Layout.js';
import {Link,Route} from 'react-router-dom';
import MasashiRouter from './MasashiTest/MasashiTest.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const App = () => (
    <Grid>
    <PageHeader>
      S-PASS
    </PageHeader>
    <Row>
      <Col xs={2} md={2}>
        <Nav>
          <NavItem>
            <Link to="/Layout">
              <Button bsStyle="info">Layout</Button>
              </Link>
          </NavItem>
          <NavItem>
            <Link to="/MasashiRouter">
              <Button bsStyle="primary">Masashi Test</Button>
            </Link>
          </NavItem>
        </Nav>
      </Col>
      <Col xs={14} md={10}>
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
