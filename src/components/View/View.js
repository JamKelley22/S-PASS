import React from 'react';

import SideBar from '../SideBar/Sidebar.js';
import Home from '../Home/Home.js';
import TopNav from '../SideBar/navbar.js';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

import {Link,Route} from 'react-router-dom';

import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';

const View = () =>(
  <div>

  <Row>
    <Col xs={9} md={9}>
      <div className="pre-scrollable">

      </div>
    </Col>
  </Row>

  </div>
)

export default View;
