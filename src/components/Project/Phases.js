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
      </div>
    </div>

    <PhasesSideBar match={match}/>

    <div id='content'>

      <Route path='/Phases/PhaseOne/Input' component={PhaseOneInput}/>
      <RouteWithProps path="/Phases/PhaseOne/Output" component={LoadComponent} CompLoad={PhaseOneOutput}/>

      <Route path='/Phases/PhaseTwo/Input' component={PhaseTwoInput}/>
      <RouteWithProps path="/Phases/PhaseTwo/Output" component={LoadComponent} CompLoad={PhaseTwoOutput}/>

      <Route path='/Phases/PhaseThree/Input' component={PhaseThreeInput}/>
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
