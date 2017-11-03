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
      Use the sustainable product architecture and supplier selection (S-PASS) tool to evaluate existing architectures of a product and find replacement product architectures and suppliers.
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
          <h3 className='clearfix'><i className="fa fa-leaf"/>Learning Objectives</h3>

<p className='clearfix'>
Learning Objectives
Students completing this case study will identify the challenges and benefits of sustainability decision making for design and manufacturing. The learning objectives of this case study are listed as follows:
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
        An overview of S-PASS is illustrated in the figure below. The tool employs a matrix propagation system which constructs and uses a series of overlapping matrices to derive a final solution. Users input information regarding sustainability requirements, existing and alternative modules, and new suppliers. This information is then processed according to thresholds on requirement satisfaction and environmental impact to reveal acceptable alternative modules (product architectures) and related suppliers.
        </p>

        {/*}<Image src={require('../../Images/S-PASS_Diagram.PNG')} alt='S-PASS Diagram' className='clearfix' />*/}

 </div>
 </Panel>


        <div id='spacing'/>
      </BackgroundImage>
    </div>

  </div>
)

export default Home;
