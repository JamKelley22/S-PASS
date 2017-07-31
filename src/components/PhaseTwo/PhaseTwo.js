import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';
import {addAlternate,removeAlternate} from '../../actions/selectedAlternatesActions.js';
import {bindActionCreators} from 'redux';
import CustomPhaseTwoMatrix from '../Matrix/CustomPhaseTwoMatrix.js';


class PhaseTwo extends React.Component{
  constructor(props) {
    super(props);
    this.math = require('mathjs');
    this.makeList = this.makeList;
  }

  makeList(data){
      let dataList = [];
      for(var key in data){
        //console.log(data[key].name);
        dataList.push(data[key].name);
      }
      //console.log(dataList);
      return dataList;
  }


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
      <h1>New Architectures & Suppliers Input</h1>

      <UniqueDropdown
        title={'Alternate Modules'}
        dropDownChoices = {this.makeList(this.props.altModuleData)}
        dataValues = {this.props.selectedAlternates}
        addData = {this.props.addAlternate}
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
    selectedAlternates: state.selectedAlternates,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addAlternate: addAlternate,
    removeAlternate: removeAlternate,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseTwo);
