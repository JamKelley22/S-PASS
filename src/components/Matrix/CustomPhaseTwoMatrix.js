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

        <Table responsive striped bordered condensed hover id="myCustomTable">
        <thead>
          <tr>
            <td rowSpan={2}>Threshold Determination</td>
            <td colSpan={3}>Module Related Environmental Indicators</td>
            <td colSpan={3}>Supplier Related Environmental Indicators</td>
          </tr>
          <tr>
            <td>Hazardous Material Use</td>
            <td>Recyclability</td>
            <td>Renewable Material Use</td>
            <td>ISO 14001</td>
            <td>Use of Recycled Materials</td>
            <td>Environmentally Friendly Packaging</td>
          </tr>

        </thead>

        <tbody>
          <td>Value</td>
          <td>{this.props.ModuleThresh.hazard}</td>
          <td>{this.props.ModuleThresh.recycle}</td>
          <td>{this.props.ModuleThresh.renew}</td>
          <td>{this.props.SupplierThresh.iso}</td>
          <td>{this.props.SupplierThresh.recycle}</td>
          <td>{this.props.SupplierThresh.pack}</td>
        </tbody>
        </Table>
      </div>

    );
  }


}
