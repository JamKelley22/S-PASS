import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';
import Cell from './Cell.js';

export default class notATest extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    var matrixContent = this.props.matrixContent;

    return(

      <div id="myScroll">
        <h1>{this.props.title}</h1>
          <Table responsive striped bordered condensed hover id="myTable">
          <thead>
            <tr>
              <th></th>
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
                  <th ><div className="block-with-text">{this.props.rowNames[indexI]}
                  </div></th>
                  </OverlayTrigger>
                  {nested.map((name,indexJ)=>
                    {return <Cell
                      indexJ={indexJ}
                      indexI={indexI}
                      name={name}
                      canEditCells = {this.props.canEditCells}
                      editCell = {this.props.editCell}
                      onClick={() => getCellInputFromUser(name,indexI,indexJ)}/>
                  })}</tr>})}
            </tbody>
          </Table>
      </div>
  );
  }
}
