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
    this.findRelation = this.findRelation.bind(this);
    this.functionProduct = this.functionProduct.bind(this);
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
      if(value!=0){
        newMat._data[index[0]][index[1]]=1;
      }
    });
    return newMat._data;
  }

  functionProduct(funMod,prodArch){
    var mat1 = this.math.matrix(this.matrixMult(funMod,prodArch));
    var mat2 = this.math.matrix(this.matrixMult(this.findRelation(funMod),prodArch));
    mat1.forEach(function(value,index,matrix){
      if(mat2._data[index[0]][index[1]]!=0){
        mat1._data[index[0]][index[1]]=mat1._data[index[0]][index[1]]/mat2._data[index[0]][index[1]];
      }
    });
    return mat1._data;
  }


  render(){

    return(
      <div id="myDiv">
        <h1>PhaseOneOutput</h1>
        <MatrixDisplay
          title="Function vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.functions}
          matrixContent={this.functionProduct(
            this.props.functionModuleMatrix._data,
            this.props.moduleArchitectureMatrix._data)}
          bgColor={'#7C7B50'}
        />

        <MatrixDisplay
          title="Requirement vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.requirements}
          matrixContent={this.matrixMult(this.props.requirementFunctionMatrix,
            this.functionProduct(this.props.functionModuleMatrix._data,
            this.props.moduleArchitectureMatrix._data))}
          bgColor={'#7C7B50'}

          editCell={null}
          canEditCells={false}
          numberType='bin' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
        />
      </div>
    );
  }
}
/*

*/
