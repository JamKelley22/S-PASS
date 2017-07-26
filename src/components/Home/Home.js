import React from 'react';


import {Link,Route} from 'react-router-dom';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

//
import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThree.js';

import Project from '../Project/Project.js';

import SideBar from '../SideBar/Sidebar.js';
import Breadcrumbs from '../breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,Panel,Jumbotron,Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import other from './other.css';

const Home = ({match}) =>(
  <div>
    <Jumbotron className='jumbotron' id='jumbo'>
      <div id='centerText'>
        <h2>CooL:SLiCE</h2>
        <h5>This web tool was devloped to...</h5>
        <LinkContainer to={`/Project`}>
          <Button bsStyle="primary">Get Started!</Button>
        </LinkContainer>
      </div>
    </Jumbotron>

    <div className='homebg'>
      <Panel id='p1'>
        <div id='centerText'>
          <h3><i className="fa fa-cube"/> Design</h3>
          <p>Use CAD to design 3D virtual modules of your products...</p>

          <h3><i className="fa fa-leaf"/> S-PASS</h3>
          <p>Use the sustainable product architecture and supplier selection tool to evaluate existing architectures and find replacement supplierand architectures</p>

          <h3><i className="fa fa-wrench"/> MAT</h3>
          <p>Use the Manufacturing Analysis Tool to look at the manfacturing details of your design</p>
        </div>

      </Panel>
    </div>

  </div>
)

export default Home;
