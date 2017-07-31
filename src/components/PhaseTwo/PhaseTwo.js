import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';
import CustomPhaseTwoMatrix from '../Matrix/CustomPhaseTwoMatrix.js';


class PhaseTwo extends React.Component{

  render(){
    let ModuleThresh = {
      hazard: 0,
      recycle: .5,
      renew: 0
    }
    let SupplierThresh = {
      iso: 0,
      recycle: .5,
      pack: 0
    }
    console.log('modThresh');
    console.log(ModuleThresh);
    return(
      <div>

      <UniqueDropdown
        title={'Title I'}
        dropDownChoices = {['A','B','C']}
        dataValues = {['X', 'Y', 'Z']}
      />

      <CustomPhaseTwoMatrix
        ModuleThresh = {ModuleThresh}
        SupplierThresh = {SupplierThresh}
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

function mapStateToProps(state){
  return{
    supplierData: state.supplierData,
    altModuleData: state.altModuleData,
  };
}

export default connect(mapStateToProps)(PhaseTwo);
