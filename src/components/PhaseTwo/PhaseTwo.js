import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';
import Parser from 'html-react-parser';



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

    function createTable(myArray) {
      var result = "";

      result += "<Table striped bordered condensed hover><thead><tr>";
      for(var j=0; j<myArray[0].length; j++){
          result += "<td>"+myArray[0][j]+"</td>";
      }
      result += "</tr></thead>";

      result += "<tbody>";
      for(var i=1; i<myArray.length; i++) {
          result += "<tr>";
          for(var j=0; j<myArray[i].length; j++){
              result += "<td>"+myArray[i][j]+"</td>";
          }
          result += "</tr>";
      }
      result += "</tbody></Table>";

      return result;
    }


    return(
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <h1>{myFunctionName}</h1>
          <Tab eventKey={1} title="Input">
            This is Input
          </Tab>
          <Tab eventKey={2} title="Output">

          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <td>station one</td>
                <td>000</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>station two</td>
                <td>001</td>
              </tr>
            </tbody>
          </Table>

          <h3>Option 1</h3>
          {Parser(createTable(stations))}

          <h3>Option 2</h3>
          <td dangerouslySetInnerHTML={{__html: createTable(stations)}}/>

          <h3>Option 3</h3>
          <Table striped bordered condensed hover><tbody><tr>
            {single.map(function(name,index) {
              return <td key={ index }>{name}</td>;
            })}
          </tr></tbody></Table>

          <h3>Option 4</h3>
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
