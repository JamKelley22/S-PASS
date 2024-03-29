import React from 'react';
import PhaseThreeInput from './PhaseThreeInput.js';
import PhaseThreeOutput from './PhaseThreeOutput.js';
import {Tabs,Tab,Button} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addRequirement,removeRequirement} from '../../actions/requirementListActions.js';
import {removeFunction,addFunction} from '../../actions/functionListActions.js';
import {addModule,removeModule} from '../../actions/moduleListActions.js';
import {addRowRFMat,removeRowRFMat,removeColRFMat,addColRFMat,editCellRFMat
} from '../../actions/requirementFunctionAction.js';
import {addRowFMMat,removeRowFMMat,removeColFMMat,addColFMMat,editCellFMMat
} from '../../actions/functionModuleAction.js';
import {addRowMAMat,removeRowMAMat,editCellMAMat
} from '../../actions/moduleArchitectureAction.js';


class PhaseThreeIn extends React.Component{

  render(){
    return(
        <PhaseThreeOutput
          functions= {this.props.functions}
          productArchitecture={this.props.productArchitecture}
          functionModuleMatrix={this.props.functionModuleMatrix}
          moduleArchitectureMatrix={this.props.moduleArchitectureMatrix}
          requirements = {this.props.requirements}


          functionAltModuleMatrix={this.props.functionAltModuleMatrix}
          moduleProductArchitecture={this.props.moduleProductArchitecture}
          acceptedAlternates={this.props.acceptedAlternates}
          newArchitectureList={this.props.newArchitectureList}

          requirementFunctionMatrix={this.props.requirementFunctionMatrix}
          acceptedSuppliers={this.props.acceptedSuppliers}
          supplierAltModuleMatrix={this.props.supplierAltModuleMatrix}
        />
    );
  }
}

function mapStateToProps(state){
  return{

    modules:state.moduleList,
    requirements:state.requirementList,
    productArchitecture: state.productArchitecture,
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    functionModuleMatrix: state.functionModuleMatrix,
    moduleArchitectureMatrix: state.moduleArchitectureMatrix,

    //matrix 1 output
    functions: state.functionList,
    //matrix mult 1
    functionAltModuleMatrix: state.functionAltModuleMatrix,
    moduleProductArchitecture: state.moduleProductArchitecture,
    acceptedAlternates: state.acceptedAlternates,
    newArchitectureList: state.newArchitectureList,
    //relation of (function Alt Module Matrix)/(moduleProductArchitecture)
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    acceptedSuppliers: state.acceptedSuppliers,
    supplierAltModuleMatrix: state.supplierAltModuleMatrix,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addFunction : addFunction,
    addModule: addModule,
    removeFunction:removeFunction,
    addRequirement: addRequirement,
    removeRequirement: removeRequirement,
    removeModule: removeModule,
    addRowRFMat: addRowRFMat,
    addRowFMMat: addRowFMMat,
    addRowMAMat: addRowMAMat,
    removeRowRFMat: removeRowRFMat,
    removeRowFMMat: removeRowFMMat,
    removeRowMAMat: removeRowMAMat,
    removeColRFMat: removeColRFMat,
    addColRFMat: addColRFMat,
    removeColFMMat: removeColFMMat,
    addColFMMat: addColFMMat,
    editCellRFMat: editCellRFMat,
    editCellMAMat: editCellMAMat,
    editCellFMMat: editCellFMMat,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseThreeIn);
