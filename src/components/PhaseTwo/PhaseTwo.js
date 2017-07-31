import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';
import {addAlternate,removeAlternate} from '../../actions/selectedAlternatesActions.js';
import {bindActionCreators} from 'redux';


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
    return(
      <div>

      <UniqueDropdown
        title={'Alternate Modules'}
        dropDownChoices = {this.makeList(this.props.altModuleData)}
        dataValues = {this.props.selectedAlternates}
        addData = {this.props.addAlternate}
      />

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
