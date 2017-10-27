import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';
import Cell from './Cell.js';

export default class notATest extends React.Component{
  constructor(props) {
    super(props);
    this.getSumColumnCells = this.getSumColumnCells.bind(this);
    this.state = {
      rowSum: 0
    };
  }

  componentDidMount(){
    //alert(this.props.matrixContent.length + ' ' + this.props.matrixContent[0].length);
    /*
    var matrixContent = this.props.matrixContent;
    var total = 0;
    for (var i = 0, len = matrixContent.length; i < len; i++) {
      for (var j = 0, len = matrixContent[i].length; j < len-2; j++) {
        total += parseFloat(matrixContent[i][j]);
        //alert(parseFloat(matrixContent[i][j]));
      }
    }
    this.setState({rowSum: total});
    */
  }

  componentDidUpdate(){

  }

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

  render(){
    var matrixContent = this.props.matrixContent;
    //alert(this.props.dropDownChoices);
    return(

      <div id="myScroll">
      <div id='addScrollbar'>
        <h1>{this.props.title}</h1>
          <Table responsive striped bordered condensed hover id="myTable">
          <thead>
            <tr>
              <th style={{border: 'none', backgroundColor:this.props.bgColor}}></th>
              {this.props.colNames.map((name,index)=> {
                return <OverlayTrigger placement="top" overlay={
                  <Tooltip id="tooltip"><strong>{name}</strong></Tooltip>
                }>
                <th id="colNames" key={ index }>
                <div className="block-with-text">
                {name}
                </div>
                </th>
                </OverlayTrigger>;
              })}
            </tr>
          </thead>
            <tbody>
            {matrixContent.map((nested,indexI)=>
              {return <tr>
                <OverlayTrigger placement="top" overlay={
                  <Tooltip id="tooltip"><strong>{this.props.rowNames[indexI]}</strong></Tooltip>
                }>
                  <th style={{backgroundColor: this.props.bgColor, minHeight: '60px'}}><div className="block-with-text">{this.props.rowNames[indexI]}
                  </div></th>
                  </OverlayTrigger>
                  {nested.map((name,indexJ)=>
                    {return <Cell
                      indexJ={indexJ}
                      indexI={indexI}
                      name={name}
                      canEditCells = {this.props.canEditCells}
                      editCell = {this.props.editCell}

                      numberType= {this.props.numberType}
                      editType= {this.props.editType}
                      dropDownChoices={this.props.dropDownChoices}

                      />
                  }
                )}

                  </tr>})}
            </tbody>
          </Table>
      </div>
      </div>
  );
  }
}
