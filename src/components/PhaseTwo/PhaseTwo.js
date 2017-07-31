import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';
import {LinkContainer} from 'react-router-bootstrap';


class PhaseTwo extends React.Component{

  render(){
    return(
      <div>

      <UniqueDropdown
        title={'Title I'}
        dropDownChoices = {['A','B','C']}
      />

      <h1>Hi masashi</h1>
      {this.props.supplierData[0].name}
      {console.log(this.props.supplierData)}
      {console.log(this.props.altModuleData)}





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
