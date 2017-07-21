import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.


@connect((store) => {
  return{

  };
})

export default class PhaseThree extends React.Component{
  render(){

    return(
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
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
