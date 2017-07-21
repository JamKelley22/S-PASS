import React from 'react';
import other from './other.css';

import {Link,Route} from 'react-router-dom';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

import Overview from './Overview.js';
import Files from './Files.js';
import About from './About.js';
//
import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThree.js';

import Project from '../Project/Project.js';

import SideBar from '../SideBar/Sidebar.js';
import Breadcrumbs from '../breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Home = ({match}) =>(
  <div>

    <h1>CooL:SLiCE</h1>
    <p>This web tool was devloped to...</p>
    <LinkContainer to={`/Project`}>
      <Button>Get Started!</Button>
    </LinkContainer>
    <br/>
    <h4>Design</h4>
    <p>Use CAD to design 3D virtual modules of your products...</p>
    <h4>S-PASS</h4>
    <p>Use the sustainable product architecture and supplier selection tool to evaluate existing architectures and find replacement supplierand architectures</p>
    <h4>MAT</h4>
    <p>Use the Manufacturing Analysis Tool to look at the manfacturing details of your design</p>

  </div>
)

export default Home;
