import React from 'react';

import {Tabs,Tab,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';
import MSFilterMatrix from '../Matrix/MSFilterMatrix.js';


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

      <MSFilterMatrix
        title = {'Alternate Module'}
        names = {['A1', 'A2', 'A3']}
        values = {[false,true,true]}
      />
      <MSFilterMatrix
        title = {'Supplier'}
        names = {['S1', 'S2', 'S3']}
        values = {[true,false,false]}
      />

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseTwo/Input'>
          <Button>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseThree/Input'>
          <Button>Continue</Button>
        </LinkContainer>
      </div>

      </div>
    );
  }
}

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);
