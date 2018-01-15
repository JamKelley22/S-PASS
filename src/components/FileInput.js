import React from 'react';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';

import {updateRequirementList,updateFunctionList} from '../actions/updateActions.js';
import FileInputSelect from './FileInputSelect.js';

import {removeFunction,addFunction} from '../actions/functionListActions.js';

class FileInput extends React.Component{

  render(){
    return(
      <div>
        <FileInputSelect
        updateRequirementList={this.props.updateRequirementList}
        updateFunctionList={this.props.updateFunctionList}

        addFunction={this.props.addFunction}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    updateFunctionList : updateFunctionList,
    updateRequirementList: updateRequirementList,
    addFunction : addFunction,
  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(FileInput);


/*
import React from 'react';
import Papa from 'papaparse';
import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {updateRequirementList,updateFunctionList} from '../actions/updateActions.js';
import FileInputSelect from './FileInputSelect.js';

export class FileInput extends React.Component {
    render() {
      return (
        <FileInputSelect
          updateRequirementList={this.props.updateRequirementList}
          updateFunctionList={this.props.updateFunctionList}
        />
    );}
}

function mapStateToProps(state){
  return{
    functions: state.functionList,
    modules:state.moduleList,
    requirements:state.requirementList,
    //Phase2
    selectedAlternates: state.selectedAlternates,
    selectedSuppliers: state.selectedSuppliers,
    thresholds: state.thresholds,

    //Phase3
    functionAltModuleMatrix: state.functionAltModuleMatrix,
    supplierAltModuleMatrix:state.supplierAltModuleMatrix,
    moduleProductArchitecture:state.moduleProductArchitecture,

    productArchitecture: state.productArchitecture,
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    functionModuleMatrix: state.functionModuleMatrix,
    moduleArchitectureMatrix: state.moduleArchitectureMatrix,
  };
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    //addFunction : addFunction,
    updateRequirementList : updateRequirementList,
    updateFunctionList : updateFunctionList,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(FileInput);
*/
