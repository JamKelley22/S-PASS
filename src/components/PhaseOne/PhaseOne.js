import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addFunction} from '../../actions/functionListActions.js';

class PhaseOne extends React.Component{

  render(){
    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <h1>Hello</h1>
        <Tab eventKey={1} title="Input">
          <PhaseOneInput
            addFunction={this.props.addFunction}
            functions={this.props.functions}
          />
        </Tab>
        <Tab eventKey={2} title="Output">
          <PhaseOneOuput/>
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state){
  return{
    functions: state.functionList,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addFunction : addFunction
  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseOne);
