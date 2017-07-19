import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';



@connect((store) => {
  return{
    myFunctionName: store.functionReducer.functionName,
  };
})

export default class PhaseTwo extends React.Component{
  render(){

    var stations = [
      ['station one','000','453'],
      ['station two','001'],
      ['station two','001'],
      ['station two','001']
    ];

    var single = ['1','2','3'];
    var singles = [
      ['1','2','3'],
      ['4','5','6']
  ];

    const {myFunctionName} = this.props;

    return(
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <h1>{myFunctionName}</h1>
          <Tab eventKey={1} title="Input">
            This is Input
          </Tab>
          <Tab eventKey={2} title="Output">

          <Table striped bordered condensed hover><tbody>
            {stations.map(function(nested) {
              return <tr>{nested.map(function(name,index) {
                return <td key={ index }>{name}</td>;
              })}</tr>
            })}
          </tbody></Table>



          </Tab>
        </Tabs>
      </div>
    );
  }
}
