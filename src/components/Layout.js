//Main layout for application.
//This is a smart commponent that pulls directly from the store.

import React from "react";
import {connect} from "react-redux"; //Connects the store to application.

import {addFunction} from "../actions/functionTableAction";
//bootstrap
import {Button, Grid, Col, Row,PageHeader} from 'react-bootstrap'
import './Layout.css'

//Connects to store in order to grab needed info. This is a smart component.
//Calling store.functionReducer.functionName accesses the default component for
//functionReducer called functionName
//***note: may want to change name in store from functionReducer to myFunction***
@connect((store) => {
  return{
    myFunctionName: store.functionReducer.functionName,
  };
})

export default class Layout extends React.Component{
  render(){
    //Must call in order to access props from store.
    //**note: must be same name as listed above!!!**
    const {myFunctionName} = this.props;


    return(
      <PageHeader background="red">
        <Grid>
          <Row className = "show-grid">
            <Col xs={4} md={4}>

              <Button bsStyle="custom">Push me</Button>
            </Col>
            <Col  xs={4} md={4}>
              <h1>S-PASS</h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <h1>{myFunctionName}</h1>
          </Row>
      </Grid>
      </PageHeader>
    );
  }
}
