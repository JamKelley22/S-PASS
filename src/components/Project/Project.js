import React from 'react';
import './Project.css'

import ProjectSideBar from '../SideBar/ProjectSideBar.js';

import Design from './Design.js';
import SPASS from './SPASS.js';
import MAT from './MAT.js';
import Settings from './Settings.js';

import {Link,Route} from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs.js';

import {Button,Grid,Row,Col,Nav,NavItem,Thumbnail} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import FolderPic from '../../Images/folder.png'

const Project = ({match}) =>(
  <div>

    <h1>Projects</h1>
    <h3>CooL:SLiCE projects...</h3>

    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={FolderPic} alt="242x200">
            <h3>Company X Drone Design</h3>
            <p>Description</p>
            <p>
            <LinkContainer to={`${match}/PhaseOne`}>
              <Button bsStyle="primary">Start</Button>
            </LinkContainer>
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>

        <Col xs={6} md={4}>
          <Thumbnail src={FolderPic} alt="242x200">
            <h3>Test Project</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>

        <Col xs={6} md={4}>
          <Thumbnail src={FolderPic} alt="242x200">
            <h3>New Project</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>



    {/*<Breadcrumbs/>
    <Row>
      <Col xs={3} md={3}>
        <ProjectSideBar match={match.url}/>
      </Col>
      <Col xs={9} md={9}>
        <div className="pre-scrollable">
          <Route path={`${match.url}/Design`} component={Design}/>

          <Route path={`${match.url}/S-PASS`} component={SPASS}/>
          <Route path={`${match.url}/MAT`} component={MAT}/>
          <Route path={`${match.url}/Settings`} component={Settings}/>
        </div>
      </Col>
    </Row>*/}

  </div>
)

export default Project;
