import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab,Button} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';


class PhaseOneOut extends React.Component{

  render(){
    return(
      <div>
      {console.log(this.props.functions)}
      <PhaseOneOuput
        functions= {this.props.functions}
        productArchitecture={this.props.productArchitecture}
        functionModuleMatrix={this.props.functionModuleMatrix}
        moduleArchitectureMatrix={this.props.moduleArchitectureMatrix}
      />
      </div>
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

export default connect(mapStateToProps)(PhaseOneOut);
