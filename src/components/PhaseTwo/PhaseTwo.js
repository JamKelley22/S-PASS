import React from 'react';

import {Tabs,Tab,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';



@connect((store) => {
  return{
  };
})

export default class PhaseTwo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){

    return(
      <div>

      <UniqueDropdown
        title={'Title I'}
        dropDownChoices = {['A','B','C']}
      />

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseOne/Output'>
          <Button>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseTwo/Output'>
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
