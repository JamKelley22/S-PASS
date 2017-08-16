import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
import './PhaseOneOutput.css'
export default class PhaseOneOutput extends React.Component{
  constructor(props) {
    super(props);
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;
  }

  matrixMult(mat1,mat2){

    var newMat1 = this.math.matrix(mat1);
    var newMat2 = this.math.matrix(mat2);
    var newMat = this.math.multiply(newMat1,newMat2);

    var matMult = this.math.matrix(newMat._data);
    matMult.forEach(function(value,index,matrix){

      matMult._data[index[0]][index[1]]=matMult._data[index[0]][index[1]].toFixed(2);
    });

    return matMult._data;
  }

  findRelation(myMat){
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
    var newFunMod = funMod.map(function(arr) {
    return arr.slice();
    });

    var newModArch = modArch.map(function(arr) {
    return arr.slice();
    });
    var relation = this.findRelation(newFunMod);
    var mat1= this.matrixMult(newFunMod,newModArch);
    var mat2 =this.matrixMult(relation,newModArch);
    var matOutput = this.math.matrix(mat1);
    matOutput.forEach(function(value,index,matrix){
      if(mat2[index[0]][index[1]]!=0){
        var temp = matOutput._data[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=temp/mat2[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=matOutput._data[index[0]][index[1]].toFixed(2);
      }
    });

    return matOutput._data;
  }

  render(){

    return(
      <div id="scroll">
        <h1>Requirements Output</h1>

        <h4>0:No Relation</h4>
        <h4>1:Very Poor</h4>
        <h4>2:Poor</h4>
        <h4>3:Fair</h4>
        <h4>4:Good</h4>
        <h4>5:Very Good</h4>

        <p>
        Below are the average functional satisfaction levels for new product architectures.
        </p>
        <p>
        Note that functions in red indicate that these functions are not sufficiently satisfied (less than 3) in at least one of the current products.
        </p>

        <MatrixDisplay
          title="Function vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.functions}
          matrixContent={this.functionProduct(
            this.props.functionModuleMatrix._data,
            this.props.moduleArchitectureMatrix._data)}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
        />


<p>
Below is the satisfaction level of each environmental sustainability requirement for current products. Requirements in red indicate that these requirements are not sufficiently satisfied (less than 3) in at least one of the current products.
</p>


        <MatrixDisplay
          title="Requirement vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.requirements}
          matrixContent={this.matrixMult(this.props.requirementFunctionMatrix._data,
            this.functionProduct(this.props.functionModuleMatrix._data,
            this.props.moduleArchitectureMatrix._data))}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
        />

        <div id='lowerButtons'>
          <LinkContainer to='/Phases/PhaseOne/Input'>
            <Button id='backBtn'>Back</Button>
          </LinkContainer>
          <LinkContainer to='/Phases/PhaseTwo/Input'>
            <Button style={{float: 'right'}} id='continueBtn'>Continue</Button>
          </LinkContainer>
        </div>
      </div>
    );
  }
}
