import React from 'react';
import PhaseOneInput from './PhaseOneInput/PhaseOneInput.js';
import PhaseOneOuput from './PhaseOneOutput/PhaseOneOutput.js';
import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.


@connect((store) => {
  return{
    myFunctionName: store.functionReducer.functionName,
  };
})

export default class PhaseOne extends React.Component{
  render(){

    const {myFunctionName} = this.props;

    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <h1>{myFunctionName}</h1>
        <Tab eventKey={1} title="Input">
          <PhaseOneInput name={myFunctionName}/>
          <PhaseOneInput name={myFunctionName}/>
          <PhaseOneInput name={myFunctionName}/>
        </Tab>
        <Tab eventKey={2} title="Output"><PhaseOneOuput/></Tab>
      </Tabs>
    );
  }
}
