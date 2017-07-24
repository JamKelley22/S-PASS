import React from 'react';
import {Table} from 'react-bootstrap';
import './Matrix.css';

export default class notATest extends React.Component{
  render(){
    var matrixContent = this.props.matrixContent;
    var rowNames =this.props.rowNames;
    var colNames = this.props.colNames;

    return(
      <div >
          <h1>{this.props.title}</h1>
          <Table responsive striped bordered hover className = "table-responsive">
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
                    <td >{rowNames[index]}</td>
                    {nested.map(function(name,index)
                      {return <td key={ index }>
                      {name}</td>;
                    })}</tr>})}
            </tbody>
          </Table>
      </div>
  );
  }
}
/*
<MatrixDisplay
  rowNames = {this.props.modules}
  colNames = {this.props.functions}
  matrixContent = {this.props.functionMatrix._data}
/>
*/
