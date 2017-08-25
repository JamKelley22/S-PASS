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

import LoadComponent from './loadable/LoadComponent.js';

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

      <RouteWithProps path="/Phases/PhaseOne/Input" component={LoadComponent} CompLoad={PhaseOneInput}/>
      <RouteWithProps path="/Phases/PhaseOne/Output" component={LoadComponent} CompLoad={PhaseOneOutput}/>

      <RouteWithProps path="/Phases/PhaseTwo/Input" component={LoadComponent} CompLoad={PhaseTwoInput}/>
      <RouteWithProps path="/Phases/PhaseTwo/Output" component={LoadComponent} CompLoad={PhaseTwoOutput}/>

      <RouteWithProps path="/Phases/PhaseThree/Input" component={LoadComponent} CompLoad={PhaseThreeInput}/>
      <RouteWithProps path="/Phases/PhaseThree/Output" component={LoadComponent} CompLoad={PhaseThreeOutput}/>
    </div>
  </div>
)

const RouteWithProps = ({ path, exact, strict, component:Component, location, ...rest }) => (
<Route
  path={path}
  exact={exact}
  strict={strict}
  location={location}
  render={(props) => <Component {...props} {...rest} />}
  />
)

export default Phases;
