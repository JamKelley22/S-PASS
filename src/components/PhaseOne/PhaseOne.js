import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab,Button} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addRequirement} from '../../actions/requirementListActions.js';
import {removeFunction,addFunction} from '../../actions/functionListActions.js';
import {addModule} from '../../actions/moduleListActions.js';


class PhaseOne extends React.Component{

  render(){
    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Input">
          {this.props.requirementFunctionMatrix._data[1][1]}
          <PhaseOneInput
            addFunction={this.props.addFunction}
            functions={this.props.functions}
            modules={this.props.modules}
            addModule={this.props.addModule}
            requirements={this.props.requirements}
            addRequirement={this.props.addRequirement}
            productArchitecture={this.props.productArchitecture}
            removeFunction={this.props.removeFunction}


            requirementFunctionMatrix={this.props.requirementFunctionMatrix}
            functionModuleMatrix={this.props.functionModuleMatrix}
            moduleArchitectureMatrix={this.props.moduleArchitectureMatrix}
          />
        </Tab>
        <Tab eventKey={2} title="Output">
          <PhaseOneOuput
            requirementFunctionMatrix={this.props.requirementFunctionMatrix}
            functions={this.props.functions}
            modules={this.props.modules}
          />
        </Tab>
      </Tabs>
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


export default connect(mapStateToProps,matchDispatchToProps)(PhaseOne);
