import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';



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

      </div>
    );
  }
}

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);
