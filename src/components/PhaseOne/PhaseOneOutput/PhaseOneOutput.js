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
      //Local variables used in calculating display outputs
    super(props);
    this.state = {
        fp_avg: null,      // averages for function product matrix
        rp_avg: null,      // averages for requirement product matrix
        functionVproduct: null,
        requirementVproduct: null
    };
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;

  }

  /*===========================================================================
  ****************         START HELPER FUNCTIONS        **********************
  ===========================================================================*/

  /*
  PURPOSE: Find average of matrix columns
  INPUT: Matrix of M x N size
  OUTPUT: Array of length N
  */
  findAverage(mat){

      var size = [mat.length,mat[0].length];
      var sum = Array.apply(null, Array(size[1])).map(Number.prototype.valueOf,0);

      for(var i=0;i<size[0];i++) {
          for(var j=0;j<size[1];j++) {
              sum[j] += parseFloat(mat[i][j]);
          }
      }

      sum = sum.map(currentValue => currentValue/size[0]);
      sum = sum.map(currentValue => Math.round(currentValue*100)/100);
      return sum;
  }

  /*
  PURPOSE:
  INPUT:
  OUTPUT:
   */
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

    /*
  PURPOSE: Function used to determine which indexes are not zero.
  INPUT:
  OUTPUT:
   */
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

  /*
  PURPOSE: Used to calculate the function architecture matrix
  INPUT:
  OUTPUT:
  */
  functionProduct(funMod,modArch){
      //Create new matrix with values from inputed matrices
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

  /*===========================================================================
  ****************           END HELPER FUNCTIONS        **********************
  ===========================================================================*/

  render(){
      /*
      This section declares the matrices and averages used in the display output.
      */

      //Finds function versus product matrix
      {this.state.functionVproduct = this.functionProduct(
          this.props.functionModuleMatrix._data,
          this.props.moduleArchitectureMatrix._data)}

      //Finds averages of function versus product matrix
      {this.state.fp_avg = this.findAverage(this.state.functionVproduct)}

      //Finds requirement versus product matrix
      {this.state.requirementVproduct = this.matrixMult(this.props.requirementFunctionMatrix._data,
          this.state.functionVproduct)}

      //Finds averages of requirement versus product matrix
      {this.state.rp_avg = this.findAverage(this.state.requirementVproduct)}

    return(
      <div id="scroll">
        <h1>Phase 1: Requirement Satisfaction by Existing Products (Results)</h1>
        <p>
        <b>1) Average functional satisfaction levels for new product architectures</b>
        </p>
        <p>
        Note: functions in red indicate that these functions are not sufficiently satisfied (less than 3) in at least one of the current products.
        </p>


        <MatrixDisplay
          title="Function vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.functions}
          matrixContent={this.state.functionVproduct}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
          averages={this.state.fp_avg}
        />


<p>
<b>2) Satisfaction level of each environmental sustainability requirement for current products</b>
</p>

<p>
Note: requirements in red indicate that these functions are not sufficiently satisfied (less than 3) in at least one of the current products.
</p>


        <MatrixDisplay
          title="Requirement vs. Product"
          colNames={this.props.productArchitecture}
          rowNames={this.props.requirements}
          matrixContent={this.state.requirementVproduct}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
          averages={this.state.rp_avg}
        />

        <p>
        <b>3) Modules required to be replaced</b>
        </p>

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
