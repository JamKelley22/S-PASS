import React from 'react';


import {Link,Route} from 'react-router-dom';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

//
import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThreeIn.js';

import Project from '../Project/Project.js';

import SideBar from '../SideBar/Sidebar.js';
import Breadcrumbs from '../breadcrumbs.js';
import {PageHeader,Button,Grid,Row,Col,Nav,Panel,Jumbotron,Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Backround from './Backround.js'
import BackgroundImage from 'react-background-image-loader';

import other from './other.css';

const Home = ({match}) =>(
  <div>
    <Jumbotron className='jumbotron' id='jumbo'>
      <div id='centerText'>
        <h2>CooL:SLiCE</h2>
        <h5>CooL:SLiCE stands for Constructionism in Learning: Sustainable Life Cycle Engineering. It is the online tool that helps engineers construct environmentally responsible product designs.
        </h5>
        <h5>Read more about the tools within CooL:SLiCE below!
        </h5>
        <LinkContainer to={`/Project`}>
          <Button bsStyle="primary">Get Started!</Button>
        </LinkContainer>
      </div>
    </Jumbotron>

    <div className='homebg'>
    <BackgroundImage id='bgImage' src={'../../Images/stairs.png'} placeholder={'localImage'} >
      <div id='spacing'/>
        <Panel id='p1'>

          <div id='centerText'>
            <h3><i className="fa fa-cube"/> Design</h3>
            <p>Use a built in CAD program to vizualize and design 3D virtual product models and architectures.</p>

            <h3><i className="fa fa-leaf"/> S-PASS</h3>
            <p>Use the sustainable product architecture and supplier selection (S-PASS) tool to evaluate existing architectures of a product and find replacement product architectures and suppliers.</p>

            <h3><i className="fa fa-wrench"/> MAT</h3>
            <p>Use the Manufacturing Analysis Tool (MAT) to look at the manfacturing details of your product.</p>
          </div>

        </Panel>
        <div id='spacing'/>
      </BackgroundImage>
    </div>

  </div>
)

export default Home;
