import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';


class PhaseTwo extends React.Component{

  render(){
    return(
      <div>

      <UniqueDropdown
        title={'Title I'}
        dropDownChoices = {['A','B','C']}
        dataValues = {['X', 'Y', 'Z']}
      />

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    supplierData: state.supplierData,
    altModuleData: state.altModuleData,
  };
}

export default connect(mapStateToProps)(PhaseTwo);
