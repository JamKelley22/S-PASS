import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup} from 'react-bootstrap';



@connect((store) => {
  return{
  };
})

export default class PhaseTwo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '1',
      stations: [
        ['station one','000','453'],
        ['station two','001'],
        ['station two','001'],
        ['station two','001']
      ]
    };
    this.something = this.something.bind(this);
  }

  something(name,i,j){
    <OverlayTrigger placement="right" overlay={tooltip}>
    /*
      <form>
      <FormGroup bsSize="small">
        <FormControl type="text" placeholder="Small text" />
      </FormGroup>
      </form>
      */
    </OverlayTrigger>
    var txt;
    //var person = prompt("Please enter the function name:", "Function");
    var s2 = this.state.stations;
    //s2[i][j] = person;
    this.setState({stations: s2});
    //this.setState({stations: this.state.stations.push('A')});
  }

  getInitialState() {
    return {
      value: '1',
      stations: [
        ['station one','000','453'],
        ['station two','001'],
        ['station two','001'],
        ['station two','001']
      ]
    };
  }


  render(){

    var something = this.something;

    var users = this.state.stations.map(function(nested,indexI) {
      return <tr>{nested.map(function(name,indexJ) {
        return <td key={indexJ} onClick={() => something(name,indexI,indexJ)}>{name}</td>;
      })}
      </tr>
    });

    var single = ['1','2','3'];
    var singles = [
      ['1','2','3'],
      ['4','5','6']
  ];


    return(
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Input">
            This is Input
          </Tab>
          <Tab eventKey={2} title="Output">

          <Table striped bordered condensed hover><tbody>
            {users}
          </tbody></Table>


          </Tab>
        </Tabs>
      </div>
    );
  }
}

const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);
