import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
import './PhaseOneOutput.css'
export default class PhaseOneOutput extends React.Component{
  constructor(props) {
    super(props);
    //var math=require('mathjs');
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;
  }

  matrixMult(mat1,mat2){

    var newMat1 = this.math.matrix(mat1);
    var newMat2 = this.math.matrix(mat2);
    var newMat = this.math.multiply(newMat1,newMat2);
    var matMult = this.math.matrix(newMat);
    matMult.forEach(function(value,index,matrix){

      matMult._data[index[0]][index[1]]=matMult._data[index[0]][index[1]].toFixed(2);
    });
    console.log('mat1');
    console.log(mat1);

    return matMult._data;
  }

  findRelation(myMat){
    //var newMat = this.math.matrix(mat);
    var newMat = myMat.map(function(arr) {
    return arr.slice();
    });
    var relationMat = this.math.matrix(newMat);
    relationMat.forEach(function(value,index,matrix){
      if(value!=0){
        relationMat._data[index[0]][index[1]]=1;
      }
    });
    return relationMat._data;
  }

  functionProduct(funMod,modArch){
    //console.log(funMod);
    //console.log(modArch);
    //Deep copy of matrices.
    var newFunMod = funMod.map(function(arr) {
    return arr.slice();
    });
    var newModArch = modArch.map(function(arr) {
    return arr.slice();
    });
    console.log('newFunMod');
    console.log(newFunMod);
    console.log('newModArch');
    console.log(newModArch);

    var relation = this.findRelation(newFunMod);
    var mat1= this.matrixMult(newFunMod,newModArch);
    var mat2 =this.matrixMult(relation,newModArch);
    //console.log(mat1);
    var matOutput = this.math.matrix(mat1);
    matOutput.forEach(function(value,index,matrix){
      if(mat2[index[0]][index[1]]!=0){
        var temp = matOutput._data[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=temp/mat2[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=matOutput._data[index[0]][index[1]].toFixed(2);
        //console.log(matOutput._data[index[0]][index[1]]);
      }
    });

    return matOutput._data;
  }



  render(){

    return(
      <div id="scroll">
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
this.functionProduct(
  this.props.functionModuleMatrix._data,
  this.props.moduleArchitectureMatrix._data)
mat 1:
this.functionProduct(
  this.props.functionModuleMatrix._data,
  this.props.moduleArchitectureMatrix._data)
mat 2:
this.matrixMult(this.props.requirementFunctionMatrix,
  this.functionProduct(this.props.functionModuleMatrix._data,
  this.props.moduleArchitectureMatrix._data))

*/
