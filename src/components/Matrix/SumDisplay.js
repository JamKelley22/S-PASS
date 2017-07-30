import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './SumDisplay.css';

export default class SumDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.getSumColumnCells = this.getSumColumnCells.bind(this);
  }

  //matrixContent={this.props.requirementFunctionMatrix._data}
  //maxNumber={1}

  getSumColumnCells() {
    const data = this.props.matrixContent;
    var rowSum;

    return(
      data.map((el,indexI) => {
        rowSum = 0;
        el.map((value,indexJ) => {
          rowSum+=value;
        })
        //alert(rowSum);
        if(rowSum > this.props.maxNumber || rowSum < this.props.maxNumber) {
          return(
            <tr>
              <td >
                <span style={{color:'red'}} className="fa fa-exclamation-circle"></span><p style={{color:'red'}}>{(rowSum*100).toFixed(0)}%</p>
              </td>
            </tr>
          );
        }
        else if(rowSum == 1) {
          return(
            <tr>
              <td >
                <span style={{color:'green'}} className="fa fa-check"></span><p style={{color:'green'}}>{(rowSum*100).toFixed(0)}%</p>
              </td>
            </tr>
          );
        }
        else {
          return(
            <tr>
              <td >
                {rowSum}
              </td>
            </tr>
          );
        }

      })
    );


  }

  render() {
    //<tr><td>{rowSum}</td></tr>

    /*
    data.map((el,indexI) => {
      rowSum = 0;
      el.map((value,indexJ) => {
        rowSum+=value;
      })
      //alert(rowSum);
      return(
        <tr><td>HI</td></tr>
      );
    });
    */
    return(
      <Table className="myTable">
        <thead><tr id='line'><td id='item'></td></tr></thead>
        <tbody>
          {this.getSumColumnCells()}
        </tbody>
      </Table>
    );
  }
}
