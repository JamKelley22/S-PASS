import React from 'react';
import './Project.css'

import ProjectSideBar from '../SideBar/ProjectSideBar.js';

import Design from './Dashboard/Design.js';
import SPASS from './Dashboard/SPASS.js';
import MAT from './Dashboard/MAT.js';
import Settings from './Dashboard/Settings.js';

import {Link,Route} from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs.js';

import {Button,Grid,Row,Col,Nav,NavItem,Thumbnail,Panel,Image,Glyphicon,Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import FolderPic from '../../Images/folder.png';

const Project = ({match}) =>(
  <div>

    <div className='colorBar'/>

    <div className='centerText'>
      <h1>Projects</h1>
      <h3>CooL:SLiCE projects...</h3>
    </div>

    <Panel className='p1'>

      <Folder className='folder'/>
      <Folder className='folder'/>
      <NewFolder className='folder'/>

    </Panel>



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
const Folder = ({match}) =>(
  <div className='folder'>

  <Glyphicon glyph="folder-close" className='folder-close'/>

  <Panel className='projectPanel'>
    Project
  </Panel>

  <div className='folderIcons'>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="inbox" className='fIcon' id='box'/></div>
    </LinkContainer>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="leaf" className='fIcon' id='leaf'/></div>
    </LinkContainer>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="wrench" className='fIcon'/></div>
    </LinkContainer>

  </div>

  </div>
)
const NewFolder = ({match}) =>(
  <div className='folder'>

  <Glyphicon glyph="folder-close" className='folder-close'/>

  <Panel className='projectPanel'>
    New Project
    <LinkContainer to={'/Dashboard'}>
      <span><Glyphicon glyph="plus-sign" className='plusSign'/></span>
    </LinkContainer>
  </Panel>

  <div className='folderIcons'>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="inbox" className='newFIcon' id='newBox'/></div>
    </LinkContainer>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="leaf" className='newFIcon' id='newLeaf'/></div>
    </LinkContainer>

    <LinkContainer to={'/Project'}>
      <div><Glyphicon glyph="wrench" className='newFIcon' id='newWrench'/></div>
    </LinkContainer>

  </div>

  </div>
)

export default Project;
