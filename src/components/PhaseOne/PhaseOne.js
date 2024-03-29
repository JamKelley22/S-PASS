import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
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
import {addRowFaMMat,removeRowFaMMat} from '../../actions/functionAltModuleActions.js';
import {addRowMPAMat,removeRowMPAMat} from '../../actions/moduleProductArchitectureActions.js';


class PhaseOneIn extends React.Component{

  render(){
    return(
      <PhaseOneInput
      addFunction={this.props.addFunction}
      functions={this.props.functions}
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
      removeRowFaMMat={this.props.removeRowFaMMat}
      addRowFaMMat={this.props.addRowFaMMat}

      removeRowMPAMat={this.props.removeRowMPAMat}
      addRowMPAMat={this.props.addRowMPAMat}
      />
    );
  }
}

function mapStateToProps(state){
  return{
    functions: state.functionList,
    modules:state.moduleList,
    requirements:state.requirementList,
    productArchitecture: state.productArchitecture,
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    functionModuleMatrix: state.functionModuleMatrix,
    moduleArchitectureMatrix: state.moduleArchitectureMatrix,
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
    addRowFaMMat:addRowFaMMat,
    removeRowFaMMat:removeRowFaMMat,
    removeRowMPAMat:removeRowMPAMat,
    addRowMPAMat: addRowMPAMat,


  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseOneIn);
