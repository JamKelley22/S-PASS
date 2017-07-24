import React from 'react';

import SideBar from '../SideBar/Sidebar.js';
import Home from '../Home/Home.js';
import TopNav from '../SideBar/navbar.js';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

import {Link,Route} from 'react-router-dom';

import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const Resources = () =>(
  <div>

  <Row>
    <Col xs={9} md={9}>
      <div className="pre-scrollable">
        <Route exact path="/" component={Home}/>
        <Route path="/MasashiRouter" component={MasashiRouter}/>
      </div>
    </Col>
  </Row>

    <h2>What is S-PASS?</h2>
    <p>S-PASS is a decision support tool for considering environmental impact in product architectures and supplier identification is presented for the Cool:SLiCEPlatform.</p>
  </div>
)

export default Resources;
