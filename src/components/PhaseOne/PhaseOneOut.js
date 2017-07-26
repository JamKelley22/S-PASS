import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab,Button} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addRequirement} from '../../actions/requirementListActions.js';
import {removeFunction,addFunction} from '../../actions/functionListActions.js';
import {addModule} from '../../actions/moduleListActions.js';


class PhaseOneOut extends React.Component{

  render(){
    return(
      <PhaseOneOuput
        requirementFunctionMatrix={this.props.requirementFunctionMatrix}
        functions={this.props.functions}
        modules={this.props.modules}
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
    addRequirement: addRequirement
  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseOneOut);
