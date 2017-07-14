//Main layout for application.
//This is a smart commponent that pulls directly from the store.

import React from "react";
import {Link} from 'react-router';
import {connect} from "react-redux"; //Connects the store to application.

import {addFunction} from "../actions/functionTableAction";
//bootstrap
import {Button, Grid, Col, Row,PageHeader} from 'react-bootstrap';
import './Layout.css';

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
        <Grid>
          <Row>
            <h1>
              Layout Page
            </h1>
            <h1>{myFunctionName}</h1>
          </Row>
          <Row>
            <Col>
              <Button bsStyle="custom">Push me</Button>
            </Col>
          </Row>
      </Grid>
    );
  }
}
