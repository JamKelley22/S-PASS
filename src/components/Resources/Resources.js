import React from 'react';

import SideBar from '../SideBar/SideBar.js';
import Home from '../Home/Home.js';
import TopNav from '../SideBar/navbar.js';

import {Link,Route} from 'react-router-dom';

import {PageHeader,Button,Grid,Row,Col,Nav,NavItem,Image,Jumbotron,Panel} from 'react-bootstrap';
import BackgroundImage from 'react-background-image-loader';

import pdfFile from './pdf-sample.pdf';
import './Resources.css'

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
              <a href="https://drive.google.com/file/d/14vcWX8f5f4YtXaJBoC7I3quPOYHY4Bsy/view?usp=sharing" target="_blank">Overview of S-PASS</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/file/d/1eHZYEWc-hsrtVOkgbbnLuHKi_0SFXEBK/view?usp=sharing" target="_blank">Constructionism in Learning: Sustainable Life Cycle Engineering Project (CooL:SLiCE)</a>
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
              <a href="https://drive.google.com/open?id=1r1AXSu4zjMoEd5yC47BPiUnUmM70UmUc" target="_blank">Development of Learning Modules for Sustainable Life Cycle Product Design: A Constructionist Approach</a>
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
              <a href="https://drive.google.com/open?id=1zR8vuPwA3xufEbEhZlehRDhXnSvxtJda" target="_blank">A Sustainable Modular Product Design Approach with Key Components and Uncertain End-of-life Options Consideration</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/open?id=155jwGqsWBdVV3fAN3owRGSDPA3wQW2gx" target='_blank'>A Case Study for Sustainable Drone Design</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/open?id=14Czumn-oPLAJOLk-HCABgGr1QW-6h05V" target="_blank">CooL:SLiCE S-PASS Tool</a>
              </p>
              <p className='clearfix'>
              <a href="https://drive.google.com/open?id=1Hwgz1qeko2IEV9es3FMcuO6PVejYdxY6" target="_blank">CooL:SLiCE S-PASS Tool Example</a>
              </p>




              {/*
              <a href="\PDF\A Case Study for Sustainable Drone Design_SPASS for Excel.pdf" download="A Case Study for Sustainable Drone Design_SPASS for Excel.pdf">Download Text</a>
              */}


            </div>
            <p className='clearfix' id='center'>
            <a href='https://github.com/JamKelley22/S-PASS'><span className="fa fa-github fa-lg"></span></a>
            </p>
          </Panel>



        <div id='spacing'/>
        </BackgroundImage>
        </div>





      </div>


    );
  }
}

export default Resources;
