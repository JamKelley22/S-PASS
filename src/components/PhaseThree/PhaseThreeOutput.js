import React from 'react';

import {Tabs,Tab,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux"; //Connects the store to application.
import {Table} from 'react-bootstrap';
import MatrixDisplay from '../Matrix/Matrix.js';
import './PhaseThree.css';

export default class PhaseThreeOutput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        fa_matrix: null,
        ra_matrix: null,
        ea_matrix: null,
        fa_avg: null,
        ra_avg:null

    }
    //var math=require('mathjs');
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;
    this.selectionMatrix = this.selectionMatrix;
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
  selectionMatrix(mat1,mat2){
    console.log("=====SELECTION MATRIX======");
    console.log(mat1);
    if(mat1.length!=0){
      let newMatrix = this.matrixMult(mat1,mat2);
      console.log("newMatrix");
      console.log(newMatrix);
      var selected = newMatrix.map(function(x){
        console.log("made it");
        return(x.map(function(num){
          console.log("also made it");
          if(num>0){
            return "Accepted";
          }
          else{
            return "Not Accepted";
          }
        }))
      })
      console.log(selected);
      return selected;
    }
    else{
      return [["nothing selected","nothing selected","nothing selected"]];
    }
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
    for(var i=0;i<newMat._size[0];i++){
        newMat._data[i] = newMat._data[i].map(currentValue => Math.round(currentValue*100)/100);
    }
    return newMat._data;
  }

  /*
  PURPOSE:
  INPUT:
  OUTPUT:
   */
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

  /*
  PURPOSE:
  INPUT:
  OUTPUT:
   */
  functionProduct(funMod,modArch){
    console.log(funMod);
    //console.log('did the thing YES');
    if(funMod[0].length!=0 && modArch.length!=0){
    //Deep copy of matrices.

    var newFunMod = funMod.map(function(arr) {
    return arr.slice();
    });
    var newModArch = modArch.map(function(arr) {
    return arr.slice();
    });

    var relation = this.findRelation(newFunMod);
    var mat1= this.matrixMult(newFunMod,newModArch);
    var mat2 =this.matrixMult(relation,newModArch);

    console.log(mat1);
    var matOutput = this.math.matrix(mat1);
    matOutput.forEach(function(value,index,matrix){
      if(mat2[index[0]][index[1]]!=0){
        var temp = matOutput._data[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=temp/mat2[index[0]][index[1]];
        matOutput._data[index[0]][index[1]]=matOutput._data[index[0]][index[1]].toFixed(2);
        console.log(matOutput._data[index[0]][index[1]]);
      }
    });

    return matOutput._data;
    }
    else{
      let temp=[];
      for(var i=0;i<funMod.length;i++){
        temp.push([]);
      }
      return temp;
    }
  }

  /*===========================================================================
  ****************           END HELPER FUNCTIONS        **********************
  ===========================================================================*/


  render(){
      //Create function architecture matrix
      {this.state.fa_matrix = this.functionProduct(
          this.props.functionAltModuleMatrix._data,
          this.props.moduleProductArchitecture._data)}
      //Create requirement architecture matrix
      {this.state.ra_matrix = this.matrixMult(this.props.requirementFunctionMatrix._data,
          this.functionProduct(this.props.functionAltModuleMatrix._data,
              this.props.moduleProductArchitecture._data))}
      //Create supplier architecture matrix
      {this.state.ea_matrix = this.selectionMatrix(this.props.supplierAltModuleMatrix._data,
          this.props.moduleProductArchitecture._data)}
      //Create function architecture averages
      {this.state.fa_avg = this.findAverage(this.state.fa_matrix)}
      //Create requirement architecture averages
      {this.state.ra_avg = this.findAverage(this.state.ra_matrix)}

    return(
      <div id='scroll'>

        <h1>Phase 3: Product Architecture and Supplier Selection (Results)</h1>
        <div className="divLine"></div>

        <p>
        Average functional satisfaction levels for new product architectures:
        </p>

<div className='overlay'>
        <MatrixDisplay
          title="Function / Architecture"
          colNames={this.props.newArchitectureList}
          rowNames={this.props.functions}
          matrixContent={this.state.fa_matrix}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
          averages={this.state.fa_avg}
        />
</div>

        <p>
        Average functional satisfaction levels for new product architectures:
        </p>
        <div className="divLine"></div>

<div className='overlay'>
          <MatrixDisplay
          title="Requirement / Architecture"
          colNames={this.props.newArchitectureList}
          rowNames={this.props.requirements}
          matrixContent={this.state.ra_matrix}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
          averages={this.state.ra_avg}
        />
</div>

        <p>
        Suppliers selected for new product architectures:
        </p>

<div className='overlay'>
        <MatrixDisplay
          title="Supplier / Architecture"
          colNames={this.props.newArchitectureList}
          rowNames={this.props.acceptedSuppliers}
          matrixContent={this.state.ea_matrix}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
        />
</div>

        <div id='lowerButtons'>
          <LinkContainer to='/Phases/PhaseThree/Input'>
            <Button id='backBtn'><i id='chevronLeft' className="fa fa-chevron-left"/>Back</Button>
          </LinkContainer>
        </div>

      </div>
    );
  }
}
