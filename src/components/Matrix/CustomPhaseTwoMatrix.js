import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';
import Cell from './Cell.js';

export default class CustomPhaseTwoMatrix extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  //this.props.ModuleThresh
  //this.props.SupplierThresh

  /*
  var ModuleThresh = {
    hazard: 0,
    recycle: .5,
    renew: 0
  };

  var SupplierThresh = {
    iso: 0,
    recycle: .5,
    pack: 0
  };
  */

  /*
  <Cell
    indexJ={indexJ}
    indexI={indexI}
    name={name}
    canEditCells = {this.props.canEditCells}
    editCell = {this.props.editCell}

    numberType= {this.props.numberType}
    editType= {this.props.editType}
    dropDownChoices={this.props.dropDownChoices}
    />
    */

  render() {
    return(

      <div id="myScroll">
        <h1>{this.props.title}</h1>

        <Table responsive striped bordered condensed hover id="myTable">
        <thead>
          <tr>
            <td>Threshold Determination</td>
            <td>Module Related Environmental Indicators</td>
            <td>Supplier Related Environmental Indicators</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Haz</td>
          </tr>

        </thead>

        <tbody>

        </tbody>
        </Table>
      </div>

    );
  }


}
