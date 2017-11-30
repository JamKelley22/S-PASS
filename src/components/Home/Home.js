import React from 'react';


import {Link,Route} from 'react-router-dom';
import MasashiRouter from '../MasashiTest/MasashiTest.js';

//
import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThreeIn.js';

import Project from '../Project/Project.js';

import SideBar from '../SideBar/SideBar.js';
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
      <h2>S-PASS</h2>
      <h5>
        Use the Sustainable Product Architecture and Supplier Selection (S-PASS) tool to identify environmentally sustainable product architectures and their suppliers.
      </h5>
        {/*<LinkContainer to={`/Project`}>*/}
        <LinkContainer to={`./SPASS/About`}>
          <Button bsStyle="primary">Get Started!</Button>
        </LinkContainer>
      </div>
    </Jumbotron>

    <div className='homebg'>
    <BackgroundImage id='bgImage' src={'../../Images/stairs.png'} placeholder={'localImage'} >
      <div id='spacing'/>
        <Panel id='p1'>

          <div id='centerText'>
          <h3 className='clearfix'><i className="fa fa-leaf"/>Learning Objectives</h3>

<p className='clearfix'>
Students completing this case study will identify the challenges and benefits of sustainability decision-making for design and manufacturing. The learning objectives of this case study are listed as follows:
</p>
<p className='clearfix'>
•	Students will use multi-perspectives for product design, considering requirements, functions, modules, product architectures, and suppliers, to develop environmentally responsible products.
</p>
<p className='clearfix'>
•	Students will perform a design decision-making process to integrate environmental issues into selection of product concepts and suppliers through the S-PASS (Sustainable Product Architecture and Supplier Selection) tool.
</p>
<p className='clearfix'>
•	Students will formulate their own design problems for development of environmentally responsible products.
</p>




          </div>

        </Panel>

        <Panel id="p1">
        <div id='centerText'>
        <p className='clearfix'>
          An Overview of S-PASS is illustrated in the figure below. S-PASS employs a matrix propagation system, which constructs and uses a series of overlapping matrixes, to derive a final solution. Users input information regarding new part modules and suppliers considering sustainable design requirements and environmental impacts. Then, this information is processed to the matrix system to obtain acceptable sustainable product architectures and their suppliers.
        </p>


        {/*<img src="/./Images/S-PASS_Diagram.PNG" id="divImage" />*/}
        {/*<img src={require('../../Images/S-PASS_Diagram_B.PNG')} alt='S-PASS Diagram' className='clearfix' />*/}
        <img src={require('../../Images/S-PASS_Diagram_C.PNG')} alt='S-PASS Diagram' id="divImage" className='clearfix' />


 </div>
 </Panel>


        <div id='spacing'/>
      </BackgroundImage>
    </div>

  </div>
)

export default Home;
