import React from 'react';

import SideBar from '../SideBar/SideBar.js';
import Home from '../Home/Home.js';
import TopNav from '../SideBar/navbar.js';

import {Link,Route} from 'react-router-dom';

import {PageHeader,Button,Grid,Row,Col,Nav,NavItem,Image} from 'react-bootstrap';
import pdfFile from './pdf-sample.pdf';

class Resources extends React.Component {
  render() {
    return(
      <div>

      <Row>
        <Col xs={9} md={9}>
          <div className="pre-scrollable">
            <Image src={pdfFile} responsive />
          </div>
        </Col>
      </Row>

        <h2>What is S-PASS?</h2>
        <p>S-PASS is a decision support tool for considering environmental impact in product architectures and supplier identification is presented for the Cool:SLiCEPlatform.</p>
      </div>
    );
  }
}

export default Resources;
