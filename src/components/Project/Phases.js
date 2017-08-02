import React from 'react';
import {Link,Route} from 'react-router-dom';

import SideBar from '../SideBar/SideBar.js';

import Overview from './Overview.js';

import PhaseOneInput from '../PhaseOne/PhaseOne.js';
import PhaseOneOutput from '../PhaseOne/PhaseOneOut.js';

import PhaseTwoInput from '../PhaseTwo/PhaseTwo.js';
import PhaseTwoOutput from '../PhaseTwo/PhaseTwoOut.js';

import PhaseThreeInput from '../PhaseThree/PhaseThreeIn.js';
import PhaseThreeOutput from '../PhaseThree/PhaseThreeOut.js';

import PhasesSideBar from '../SideBar/PhasesSideBar.js';

import Files from './Files.js';
import About from './About.js';

import Breadcrumbs from '../breadcrumbs.js';

import './Dashboard/SPASS.css';

const Phases = ({match}) =>(
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
        ['Dashboard','/Dashboard'],
        ['S-PASS', '/SPASS/About'],
        ['Phases', '/Phases']
      ]}
    />

    <PhasesSideBar match={match}/>

    <div id='content'>
      <Route path="/Phases/PhaseOne/Input" component={PhaseOneInput}/>
      <Route path="/Phases/PhaseOne/Output" component={PhaseOneOutput}/>

      <Route path="/Phases/PhaseTwo/Input" component={PhaseTwoInput}/>
      <Route path="/Phases/PhaseTwo/Output" component={PhaseTwoOutput}/>

      <Route path="/Phases/PhaseThree/Input" component={PhaseThreeInput}/>
      <Route path="/Phases/PhaseThree/Output" component={PhaseThreeOutput}/>
    </div>
  </div>
)

export default Phases;
