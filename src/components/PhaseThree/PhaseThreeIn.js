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
import {editCellFaMMat} from '../../actions/functionAltModuleActions.js';
import {editCellMPAMat} from '../../actions/moduleProductArchitectureActions.js';

class PhaseThreeIn extends React.Component{

  render(){
    return(
      <div>
        <PhaseThreeInput
        addFunction={this.props.addFunction}

        modules={this.props.modules}
        addModule={this.props.addModule}
        requirements={this.props.requirements}
        addRequirement={this.props.addRequirement}
        productArchitecture={this.props.productArchitecture}
        removeFunction={this.props.removeFunction}
        removeModule={this.props.removeModule}
        removeRequirement={this.props.removeRequirement}
        addRowRFMat={this.props.addRowRFMat}
        addRowFMMat={this.props.addRowFMMat}
        addRowMAMat={this.props.addRowMAMat}
        removeRowRFMat={this.props.removeRowRFMat}
        removeRowFMMat={this.props.removeRowFMMat}
        removeRowMAMat={this.props.removeRowMAMat}
        removeColRFMat={this.props.removeColRFMat}
        addColRFMat={this.props.addColRFMat}
        removeColFMMat={this.props.removeColFMMat}
        addColFMMat={this.props.addColFMMat}
        editCellRFMat={this.props.editCellRFMat}
        editCellMAMat={this.props.editCellMAMat}
        editCellFMMat={this.props.editCellFMMat}


        requirementFunctionMatrix={this.props.requirementFunctionMatrix}
        functionModuleMatrix={this.props.functionModuleMatrix}
        moduleArchitectureMatrix={this.props.moduleArchitectureMatrix}

        selectedAlternates={this.props.selectedAlternates}
        functions={this.props.functions}
        selectedSuppliers={this.props.selectedSuppliers}
        newArchitectureList = {this.props.newArchitectureList}

        acceptedAlternates = {this.props.acceptedAlternates}
        functionAltModuleMatrix = {this.props.functionAltModuleMatrix}
        editCellFaMMat = {this.props.editCellFaMMat}

        acceptedSuppliers = {this.props.acceptedSuppliers}
        supplierAltModuleMatrix = {this.props.supplierAltModuleMatrix}
        moduleProductArchitecture={this.props.moduleProductArchitecture}
        editCellMPAMat={this.props.editCellMPAMat}
        />
      </div>
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

    selectedAlternates: state.selectedAlternates,
    functions: state.functionList,
    selectedSuppliers:state.selectedSuppliers,
    newArchitectureList: state.newArchitectureList,
    acceptedAlternates: state.acceptedAlternates,
    functionAltModuleMatrix: state.functionAltModuleMatrix,
    acceptedSuppliers: state.acceptedSuppliers,

    supplierAltModuleMatrix: state.supplierAltModuleMatrix,
    moduleProductArchitecture: state.moduleProductArchitecture,
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
    editCellFaMMat: editCellFaMMat,
    editCellMPAMat: editCellMPAMat,


  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseThreeIn);
