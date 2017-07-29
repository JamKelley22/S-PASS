import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';



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

  something(value){
    alert(value);
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
    var users = this.state.stations.map(function(nested) {

      return <tr>{nested.map(function(name,index) {
        return <td key={index} onClick={() => something(name)}>{name}</td>;
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
