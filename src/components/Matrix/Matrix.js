import React from 'react';
import {Table,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './Matrix.css';

export default class notATest extends React.Component{
/*
  constructor(props) {
    super(props);
  this.combineData = this.combineData.bind(this);
}
*/
/*
  combineData(matrix,row){
    var i;
    var newMat=[...matrix];
    //console.log(row);
    console.log(matrix);
    for(i=0;i<row.length;i++){
      newMat[i].unshift(row[i]);
    }
    return newMat
  }
*/
  render(){
    var matrixContent = this.props.matrixContent;
    //var rowNames =this.props.rowNames;
    //var colNames = this.props.colNames;
    //var newMat=this.combineData(this.props.matrixContent,this.props.rowNames)//[["test","test1"],["Hello","Me"]],["Added One","added two"]);

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
            {matrixContent.map((nested,index)=>
              {return <tr>
                <OverlayTrigger placement="top" overlay={
                  <Tooltip id="tooltip"><strong>{this.props.rowNames[index]}</strong></Tooltip>
                }>
                  <th ><div className="block-with-text">{this.props.rowNames[index]}
                  </div></th>
                  </OverlayTrigger>
                  {nested.map((name,index)=>
                    {return <td key={ index }>
                    {name}</td>;
                  })}</tr>})}
            </tbody>
          </Table>
          <li>
          {this.props.rowNames}
          </li>
      </div>
  );
  }
}
/*


      //test1

      {newMat.map((nested,index)=>
        {return <tr>
          <OverlayTrigger placement="top" overlay={
            <Tooltip id="tooltip"><strong>{newMat[index][0]}</strong></Tooltip>
          }>
            <th ><div className="block-with-text">{this.props.rowNames[index]}
            </div></th>
            </OverlayTrigger>
            {nested.slice(nested.length).map((name,index)=>
              {return <td key={ index }>
              {name}</td>;
            })}</tr>})}
*/