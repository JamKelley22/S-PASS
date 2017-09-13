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
        <p>The following articles are a compilation, though not exhaustive, of research surrounding the CooL:SLiCE project.</p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCOENiUFlZT1lvZjQ/view?usp=sharing" target="_blank">Constructionist Learning for Environmentally Responsible Product Design</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCazJLUExjTW5sTVU/view?usp=sharing" target="_blank">Cyber Collaboratory-based Sustainable Design Education: A Pedagogical Framework</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCdVRLZ1Jnc09UOGc/view?usp=sharing" target="_blank">Development of Learning Modules for Sustainable Life Cycle Product Design: A Constructionist Approach</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCNlpmcldKQVJfOEU/view?usp=sharing" target="_blank">The Organization of Sustainability metrics based on Utility through Explanatory Factor Analysis</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCQVVkV0hjWDJuNGc/view?usp=sharinghttps://drive.google.com/file/d/0B62DcZUjOkoCNlpmcldKQVJfOEU/view?usp=sharing" target="_blank">The Selection and Organization of Sustainability Metrics</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/0B62DcZUjOkoCM2dhbzVOMTRTcVU/view?usp=sharing" target="_blank">A Sustainabile Modular Product Design Approach with Key Components and Uncertain End-of-life Options Consideration</a>
        </p>
      </div>
    );
  }
}

export default Resources;
