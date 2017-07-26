import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab,Button} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addRequirement,removeRequirement} from '../../actions/requirementListActions.js';
import {removeFunction,addFunction} from '../../actions/functionListActions.js';
import {addModule,removeModule} from '../../actions/moduleListActions.js';
import {addRowRFMat,removeRowRFMat} from '../../actions/requirementFunctionAction.js';
import {addRowFMMat} from '../../actions/functionModuleAction.js';
import {addRowMAMat} from '../../actions/moduleArchitectureAction.js';


class PhaseOne extends React.Component{

  render(){
    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Input">
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
    addRequirement: addRequirement,
    removeRequirement: removeRequirement,
    removeModule: removeModule,
    addRowRFMat: addRowRFMat,
    addRowFMMat: addRowFMMat,
    addRowMAMat: addRowMAMat,
    removeRowRFMat: removeRowRFMat
  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseOne);
