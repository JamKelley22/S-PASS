import React from 'react';

import {Tabs,Tab,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';
import MSFilterMatrix from '../Matrix/MSFilterMatrix.js';

import './PhaseTwoOut.css';

@connect((store) => {
  return{
  };
})

export default class PhaseTwoOut extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){

    return(
      <div>

      <div id='msMatrix'>
        <MSFilterMatrix
          title = {'Alternate Module'}
          names = {['A1', 'A2', 'A3']}
          values = {[false,true,true]}
        />
      </div>

      <div id='msMatrix'>
        <MSFilterMatrix
          title = {'Supplier'}
          names = {['S1', 'S2', 'S3']}
          values = {[true,false,false]}
        />
      </div>

      <h1>New Architectures & Suppliers Output</h1>

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseTwo/Input'>
          <Button id='backBtn'>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseThree/Input'>
          <Button style={{float: 'right'}} id='continueBtn'>Continue</Button>
        </LinkContainer>
      </div>

      </div>
    );
  }
}

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);
