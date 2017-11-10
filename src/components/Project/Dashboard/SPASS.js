import React from 'react';
import {Link,Route} from 'react-router-dom';

import Overview from '../Overview.js';

import Files from '../Files.js';
import About from '../About.js';

import Breadcrumbs from '../../breadcrumbs.js';
import SideBar from '../../SideBar/SideBar.js';

import './SPASS.css';

const SPASS = ({match}) =>(
  <div>
    <div className='colorBar'>
      <div className='colorBarText'>
      </div>
    </div>

  {/*}  <Breadcrumbs
      crumbs={[
        ['Home','/'],
        ['Projects','/Project'],
        ['Dashboard','/Dashboard'],
        ['S-PASS', '/SPASS/About']
      ]}
    />*/}

    <SideBar match={match}/>


    <div id='content'>
      <Route path="/SPASS/Overview" component={Overview}/>


      {/*<Route path="/SPASS/PhaseOne" component={PhaseOne}/>
      <Route path="/SPASS/PhaseTwo" component={PhaseTwo}/>
      <Route path="/SPASS/PhaseThree" component={PhaseThree}/>*/}

      <Route path="/SPASS/Files" component={Files}/>
      <Route path="/SPASS/About" component={About}/>
    </div>
  </div>


)

export default SPASS;
