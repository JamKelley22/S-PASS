import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
export default class PhaseOneOutput extends React.Component{
  constructor(props) {
    super(props);
    //var math=require('mathjs');
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult.bind(this);
  }

  matrixMult(mat1,mat2){
    var newMat1 = this.math.matrix(mat1);
    var newMat2 = this.math.matrix(mat2);
    var newMat = this.math.multiply(newMat1,newMat2);
    return newMat._data;
  }

  findRelation(mat){
    var newMat = this.math.matrix(mat);
    newMat.forEach(function(value,index,matrix){
      console.log('value:',value,'index ',index);
    });
  }

  render(){

    return(
      <div id="myDiv">
        <h1>PhaseOneOutput</h1>
        <MatrixDisplay
          title="Function vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.functions}
          matrixContent={this.matrixMult(
            this.props.functionModuleMatrix._data,
            this.props.moduleArchitectureMatrix._data)}
        />
      </div>
    );
  }
}
/*

*/
