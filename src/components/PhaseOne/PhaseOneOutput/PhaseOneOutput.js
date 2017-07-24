import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';
import MatrixDisplay from '../../Matrix/Matrix.js';
export default class PhaseOneOutput extends React.Component{

  render(){

      //var matrixContent = this.props.functionMatrix._data;
      //var colNames =this.props.functions;
      //var rowNames = this.props.modules;


      return(
        <div>
        <MatrixDisplay
        title = "functions versus modules"
        matrixContent={this.props.functionMatrix._data}
        colNames={this.props.functions}
        rowNames={this.props.modules}
        />
        </div>
    );
  }
}
/*{rowNames.map(function(name,index){
  return})}
  */
  /*<Table striped bordered condensed hover>
  <thead>
    <tr>
      <td></td>{colNames.map(function(name,index) {
        return <td key={ index }>{name}</td>;
      })}
    </tr>
  </thead>
    <tbody>
      {matrixContent.map(function(nested,index)
        {return <tr>
            <td>{rowNames[index]}</td>
            {nested.map(function(name,index)
              {return <td key={ index }>
              {name}</td>;
            })}</tr>})}
    </tbody>
  </Table>
  */
