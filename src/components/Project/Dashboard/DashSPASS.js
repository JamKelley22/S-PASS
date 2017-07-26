import React from 'react';
import {Link,Route} from 'react-router-dom';
import {Image,Glyphicon,ProgressBar} from 'react-bootstrap';

import './SPASS.css';

const Test = ({match}) =>(
  <div id='SPASS'>

    <h3><i className="fa fa-leaf"/> S-PASS</h3>

    <div id='phase'>
      <p>Phase 1: Requirements</p>
      <div id='phaseContent'>
        <div id='phaseText'>
        Requirements: 6<br/>
        Functions: 8<br/>
        Modules: 10<br/>
        </div>
      </div>
      <ProgressBar bsStyle="success" id='pbar' now={60} />
    </div>

    <div id='phase'>
      <p>Phase 2: New Modules</p>
      <div id='phaseContent'>
        <i className="fa fa-bar-chart" id='phaseGlyph'/>
      </div>
      <ProgressBar bsStyle="success" id='pbar' now={90} />
    </div>

    <div id='phase'>
      <p>Phase 3: Selection</p>
      <div id='phaseContent'>
        <i className="fa fa-pie-chart" id='phaseGlyph'/>
      </div>
      <ProgressBar bsStyle="success" id='pbar' now={10} />
    </div>

  </div>
)

export default Test;
