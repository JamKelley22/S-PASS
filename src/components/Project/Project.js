import React from 'react';
import './Project.css'

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
  <div id ='allProject'>

    <div className='colorBar'/>

    <div className='centerText'>
      <h1>Projects</h1>
      <p>All your CooL:SLiCE projects in one place.</p>
    </div>

    <Panel className='p1'>

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

  <Link to={'/Project/#'}>
    <i className="fa fa-folder" id='folder-close'></i>
  </Link>

  <Panel className='projectPanel'>
    <p>Project</p>
  </Panel>

  <div className='folderIcons'>

    <Link to={'/Project'}>
      <i className="fa fa-cube" id='fIcon'></i>
    </Link>

    <Link to={'/Project'}>
      <i className="fa fa-leaf" id='fIcon'></i>
    </Link>

    <Link to={'/Project'}>
      <i className="fa fa-wrench" id='fIcon'></i>
    </Link>

  </div>

  </div>
)
const NewFolder = ({match}) =>(
  <div className='folder'>

  <Link to={'/Dashboard'}>
    <i className="fa fa-folder" id='folder-close'></i>
  </Link>

  <Panel className='projectPanel'>
    <p>Company X—Drone Design</p>
    <Link to={'/Dashboard'}>
      <i className="fa fa-plus-circle" id='plusSign'></i>
    </Link>
  </Panel>

  <div className='folderIcons'>

    <Link to={'/Dashboard/Design'}>
      <i className="fa fa-cube" id='newBox'></i>
    </Link>

    <Link to={'/SPASS/Overview'}>
      <i className="fa fa-leaf" id='newLeaf'></i>
    </Link>

    <Link to={'/Dashboard/MAT'}>
      <i className="fa fa-wrench" id='newWrench'></i>
    </Link>

  </div>

  </div>
)

export default Project;
