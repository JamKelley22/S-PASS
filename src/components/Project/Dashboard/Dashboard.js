import React from 'react';
import {Link,Route} from 'react-router-dom';
import {Image} from 'react-bootstrap';

import DashboardSideBar from '../../SideBar/DashboardSideBar.js';

import SPASS from './SPASS.js';
import Design from './Design.js';
import MAT from './MAT.js';
import Settings from './Settings.js';

import Breadcrumbs from '../../Breadcrumbs.js';

import './Dashboard.css';

const Dashboard = ({match}) =>(
  <div>
    <div className='colorBar'>
      <div className='colorBarText'>
        <p>Company X -- Drone Design</p>
      </div>
    </div>

    <Breadcrumbs/>

    <DashboardSideBar match={match}/>

    <div id='content'>
      <div id='Dashboard'>
        <h2 id='brown'>Dashboard</h2>
        <div id='Design'>
          <h3>Design</h3>
          <p>Product 1: Quad-copter</p><p>Edit</p>
          <Image/>
        </div>
        <div id='SPASS'>

        </div>
        <div id='MAT'>

        </div>
      </div>
      <Route path='/Dashboard/Design' component={Design}/>
      <Route path='/Dashboard/MAT' component={MAT}/>
      <Route path='/Dashboard/Settings' component={Settings}/>
    </div>
  </div>
)

export default Dashboard;
