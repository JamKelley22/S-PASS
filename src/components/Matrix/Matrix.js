import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';

export default class notATest extends React.Component{
  constructor(props) {
    super(props);
    this.getCellInput = this.getCellInput.bind(this);
  }

  getCellInput(name,i,j){
    var input = prompt("Enter new cell value:", "");
    console.log(input);
    if(input == null || input == '') {//User Pressed Cancel
      console.log('Input Canceled');
    }
    else {//User Pressed OK
      this.props.editCell(i,j,input);
    }

    //@Sushi This is where you would send the action or something.
    //I think you have everything you need?
  }

  render(){
    var getCellInput = this.getCellInput;
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
                    {return <td key={ indexJ } onClick={() => getCellInput(name,indexI,indexJ)}>
                    {name}</td>;
                  })}</tr>})}
            </tbody>
          </Table>
      </div>
  );
  }
}
