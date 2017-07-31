import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';
import Cell from './Cell.js';

/*
this.props.title = ''
this.props.names = ['']
this.props.values = [bool]

*/

export default class MSFilterMatrix extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getNameCol() {
    var rows = this.props.names;
    rows.map((el, index) =>{
      rows.push(
        <tr>
          <td>{el}</td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }

  getValueCol() {
    var rows = this.props.values;
    rows.map((el, index) =>{
      if(el) {
        rows.push(
          <tr>
            <td>Accepted</td>
          </tr>
        );
      }
      else {
        rows.push(
          <tr>
            <td style={{backgroundColor: 'red'}}>Rejected</td>
          </tr>
        );
      }
    });
    return <tbody>{rows}</tbody>;
  }

  getCols() {
    var names = this.props.names;
    var values = this.props.values;
    var mapArr = ((names.length < values.length) ? names : values)

    var rows = []

    for(var i = 0; i < mapArr.length; i++) {
      if(values[i]) {
        rows.push(
          <tr>
            <td>{names[i]}</td>
            <td>Accepted</td>
          </tr>
        );
      }
      else {
        rows.push(
          <tr>
            <td>{names[i]}</td>
            <td style={{backgroundColor: 'red'}}>Rejected</td>
          </tr>
        );
      }
    }
    return <tbody>{rows}</tbody>;
  }

  render() {
    return(
      <div>
        <Table responsive striped bordered condensed hover id="myTable">
          <thead><tr><td>{this.props.title}</td><td>{this.props.title} Filtering Result</td></tr></thead>
          {this.getCols()}
        </Table>
      </div>
    );
  }
}
