import React from 'react';

import SideBar from '../SideBar/SideBar.js';
import Home from '../Home/Home.js';
import TopNav from '../SideBar/navbar.js';

import {Link,Route} from 'react-router-dom';

import {PageHeader,Button,Grid,Row,Col,Nav,NavItem,Image,Jumbotron,Panel} from 'react-bootstrap';
import BackgroundImage from 'react-background-image-loader';

import pdfFile from './pdf-sample.pdf';

{/*import Ledge from '/./Images/stairs.png' //relative path to image // import attempt*/}


class Resources extends React.Component {
  render() {
    return(
      <div>

    {/*  <Row>
        <Col xs={9} md={9}>
          <div className="pre-scrollable">
            <Image src={pdfFile} responsive />
          </div>
        </Col>
      </Row>*/}


      <Jumbotron className='jumbotron' id='jumbo'>
        <div id='centerText'>
          <h2>Resources</h2>
          <h5>
          </h5>
        </div>

        </Jumbotron>





      <div className='homebg'>

      <BackgroundImage id='bgImage' src={'Images/Leaves.png'} placeholder={'localImage'} > {/*}// working*/}
      {/*<BackgroundImage src={stairs} alt={stairs} > //import attempt */}

                  <div id='spacing'/>
          <Panel id="p1">
            <div id='centerText'>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1nTPPDNKREY5cP9lI_fVFTMC70LCKu5kP/view?usp=sharing" target="_blank">Overview of S-PASS</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1YYLp66wQnDUT_u_VjwShQLA_0LIhNxK-/view?usp=sharing" target="_blank">Constructionism in Learning: Sustainable Life Cycle Engineering Project (CooL:SLiCE)</a>
              </p>
              {/*
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCOENiUFlZT1lvZjQ/view?usp=sharing" target="_blank">Constructionist Learning for Environmentally Responsible Product Design</a>
              </p>
              */}
              {/*
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCazJLUExjTW5sTVU/view?usp=sharing" target="_blank">Cyber Collaboratory-based Sustainable Design Education: A Pedagogical Framework</a>
              </p>
              */}
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCdVRLZ1Jnc09UOGc/view?usp=sharing" target="_blank">Development of Learning Modules for Sustainable Life Cycle Product Design: A Constructionist Approach</a>
              </p>
              {/*
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCNlpmcldKQVJfOEU/view?usp=sharing" target="_blank">The Organization of Sustainability metrics based on Utility through Explanatory Factor Analysis</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCQVVkV0hjWDJuNGc/view?usp=sharinghttps://drive.google.com/file/d/0B62DcZUjOkoCNlpmcldKQVJfOEU/view?usp=sharing" target="_blank">The Selection and Organization of Sustainability Metrics</a>
              </p>
              */}
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/0B62DcZUjOkoCM2dhbzVOMTRTcVU/view?usp=sharing" target="_blank">A Sustainable Modular Product Design Approach with Key Components and Uncertain End-of-life Options Consideration</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1WFyZkMWiCg7naXGU6eHuI_ePgGg7dxWb/view?usp=sharing" target='_blank'>A Case Study for Sustainable Drone Design</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1LcuGifKOGoKXG4294DMfQD8WzzfG7I9y/view?usp=sharing" target="_blank">CooL:SLiCE S-PASS Tool</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1BU9z--R6vCwwm3v76oe1MITJhQSGHj_Y/view?usp=sharing" target="_blank">CooL:SLiCE S-PASS Tool Example</a>
              </p>

              {/*
              <a href="\PDF\A Case Study for Sustainable Drone Design_SPASS for Excel.pdf" download="A Case Study for Sustainable Drone Design_SPASS for Excel.pdf">Download Text</a>
              */}


            </div>
          </Panel>



        <div id='spacing'/>
        </BackgroundImage>
        </div>





      </div>


    );
  }
}

export default Resources;
