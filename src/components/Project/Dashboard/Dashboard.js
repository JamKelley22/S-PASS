import React from 'react';
import {Link,Route} from 'react-router-dom';
import {Image,Glyphicon} from 'react-bootstrap';

import DashboardSideBar from '../../SideBar/DashboardSideBar.js';

import SPASS from './SPASS.js';
import Design from './Design.js';
import MAT from './MAT.js';
import Settings from './Settings.js';

import Breadcrumbs from '../../breadcrumbs.js';

import './Dashboard.css';
import DashSPASS from './DashSPASS.js';

const Dashboard = ({match}) =>(
  <div>
    <div className='colorBar'>
      <div className='colorBarText'>
        <p style={{paddingTop: '0px', paddingBottom: '0px'}}>Company X—Drone Design</p>
      </div>
    </div>

    <Breadcrumbs
      crumbs={[
        ['Home','/'],
        ['Projects','/Project'],
        ['Dashboard','/Dashboard']
      ]}
    />

    <DashboardSideBar match={match}/>

    <div id='content'>
      <div id='Dashboard'>
        <h2 id='dash'>Project Dashboard</h2>
        <div id='Design'>
          <h3><i className="fa fa-cube"/>Design</h3>

          <div id='Product1'>
            <p id='fLeft' style={{paddingLeft: '0px'}}>Product 1: Quad-copter</p>
            <Image id='dashImage' src={require('../../../Images/drone1.png')} alt='Quad-copter'/>
          </div>

        </div>


        <DashSPASS/>


        <div id='MAT'>
          <h3><i className="fa fa-wrench"/> MAT</h3>
          <i className="fa fa-area-chart" id='matGlyph'/>
          <i className="fa fa-bar-chart" id='matGlyph'/>
        </div>
      </div>
      <Route path='/Dashboard/Design' component={Design}/>
      <Route path='/Dashboard/MAT' component={MAT}/>
      <Route path='/Dashboard/Settings' component={Settings}/>
    </div>
  </div>
)

export default Dashboard;
