import React from 'react';
import {Link,Route} from 'react-router-dom';

import SideBar from '../SideBar/SideBar.js';

import Overview from './Overview.js';

import PhaseOne from '../PhaseOne/PhaseOne.js';
import PhaseTwo from '../PhaseTwo/PhaseTwo.js';
import PhaseThree from '../PhaseThree/PhaseThree.js';
import DashboardSideBar from '../SideBar/DashboardSideBar.js';

import Files from './Files.js';
import About from './About.js';

import Breadcrumbs from '../Breadcrumbs.js';

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
      <Route path="/Phases/PhaseOne" component={PhaseOne}/>
      <Route path="/Phases/PhaseTwo" component={PhaseTwo}/>
      <Route path="/Phases/PhaseThree" component={PhaseThree}/>
    </div>
  </div>
)

export default Phases;
