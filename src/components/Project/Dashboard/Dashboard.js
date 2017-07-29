import React from 'react';
import {Link,Route} from 'react-router-dom';

import DashboardSideBar from '../../SideBar/DashboardSideBar.js';

import SPASS from './SPASS.js';
import Design from './Design.js';
import MAT from './MAT.js';
import Settings from './Settings.js';

import Breadcrumbs from '../../Breadcrumbs.js';

import './SPASS.css';

const Phases = ({match}) =>(
  <div>
    <div className='colorBar'>
      <div className='colorBarText'>
        <p>Company X -- Drone Design</p>
      </div>
    </div>

    <Breadcrumbs/>

    <DashboardSideBar match={match}/>

    <div id='content'>
      <Route path='/Dashboard/Design' component={Design}/>
      <Route path='/Dashboard/MAT' component={MAT}/>
      <Route path='/Dashboard/Settings' component={Settings}/>
    </div>
  </div>
)

export default Phases;
