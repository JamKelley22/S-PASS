import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.


@connect((store) => {
  return{
    myFunctionName: store.functionReducer.functionName,
  };
})

export default class PhaseThree extends React.Component{
  render(){

    const {myFunctionName} = this.props;

    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <h1>{myFunctionName}</h1>
        <Tab eventKey={1} title="Input">
          This is Input
        </Tab>
        <Tab eventKey={2} title="Output">
          This is Output
        </Tab>
      </Tabs>
    );
  }
}