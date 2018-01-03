import React from 'react';

import {Tabs,Tab} from 'react-bootstrap';

import {connect} from "react-redux"; //Connects the store to application.
import {Table, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import MatrixDisplay from '../../Matrix/Matrix.js';
import '../../Matrix/Matrix.css';
import './PhaseOneOutput.css'
import ListStuffSimple from '../../ListStuffSimple/ListStuffSimple.js';
export default class PhaseOneOutput extends React.Component{
  constructor(props) {
      //Local variables used in calculating display outputs
    super(props);
    this.state = {
        fp_avg: null,      // averages for function product matrix
        rp_avg: null,      // averages for requirement product matrix
        relation_mat: null,//Used to hold the matrix of relationships for Requirement v Product Matrix
        relation_list:null,//Used to hold list of related modules.
        related_module_col_list:null,//Used to add Related Modules to col list in matrix
        modules_to_replace:null,//Holds a list of the final modules that need to be replaced.
        functionVproduct: null,
        requirementVproduct: null
    };
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;
    this.relatedModules = this.relatedModules;
    this.mat_col_append = this.mat_col_append;
    this.findReplace = this.findReplace;
    this.final_replace = this.final_replace;

  }

  /*===========================================================================
  ****************         START HELPER FUNCTIONS        **********************
  ===========================================================================*/
    /*
  PURPOSE: find which requirements need to be replaces in each architecture.
  INPUT:
  OUTPUT:
  */
    findReplace(mat){
        var size = [mat.length,mat[0].length];
        var list = Array.apply(null, Array(size[0])).map(Number.prototype.valueOf,0);
        for(var i=0;i<size[0];i++){
            for(var j=0; j<size[1];j++){
                if(mat[i][j] < 3){
                    list[i]=1;
                    break
                }
            }
        }
        return list;
    }

    /*
   PURPOSE:This function determines the final list of modules that need to be replaced.
   INPUT:
   OUTPUT:
   */
    final_replace(mat,thresh,modules){
        var mat_size = [mat.length,mat[0].length];
        var thresh_size = thresh.length;
        var mod_size = modules.length;
        var list = Array.apply(null, Array(mat_size[1])).map(Number.prototype.valueOf,0);
        var final_list=[];

        if(mat_size[0] == thresh_size && mat_size[1] == mod_size){
            for(var i=0; i<mat_size[0];i++){
                if(thresh[i]==1) {
                    for (var j = 0; j < mat_size[1]; j++) {
                        list[j] += parseFloat(mat[i][j]);
                    }
                }
            }
        }
        for(var k=0;k<list.length;k++){
            if(list[k]>0){
                final_list.push(modules[k]);
            }
        }
        return final_list;
    }


    /*
    PURPOSE:
    INPUT:
    OUTPUT:
    */
    mat_col_append(mat,list){
        var newMat = mat.map(function(arr) {
            return arr.slice();
        });
        var mat_size = newMat.length;
        var list_size = list.length;
        if(mat_size == list_size){
            for(var i=0; i < mat_size;i++){
                newMat[i].push(list[i]);
            }
        }
        return newMat;
    }
    /*
  PURPOSE:
  INPUT:
  OUTPUT:
  */
    relatedModules(mat,modules){
        var size = [mat.length,mat[0].length];
        var list = Array.apply(null, Array(size[0])).map(Number.prototype.valueOf,0);
        for(var i=0;i<size[0];i++){
            list[i]="";
            for(var j=0;j<size[1];j++){
                if(parseFloat(mat[i][j])==1){
                    var temp = modules[j];
                    list[i]+= temp + ", ";
                }
            }
        }
        //console.log("---------------");
        return list;
    }

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

      //Fnds the related modules of the requirement v product output matrix
      {this.state.relation_mat = this.findRelation(this.matrixMult(this.props.requirementFunctionMatrix._data,
          this.props.functionModuleMatrix._data))}

      //List of relationships for each matrix row.
      {this.state.relation_list = this.relatedModules(this.state.relation_mat,this.props.modules)}

      //function to append to matrix.
      {this.state.mat_col_append = this.mat_col_append(this.state.requirementVproduct,this.state.relation_list)}

      //Adds related modules to col list of matrix.
      {this.state.related_module_col_list = this.props.productArchitecture.slice()}
      {this.state.related_module_col_list.push("Related Module")}

      {this.state.modules_to_replace = this.final_replace(this.state.relation_mat,this.findReplace(this.state.requirementVproduct),this.props.modules)}

      return(
      <div id="scroll">
        <h1>Phase 1: Requirement Satisfaction by Existing Products (Results)</h1>

    <div className="divLine"></div>

        <p>
        <b>1) Average functional satisfaction levels for new product architectures</b>
        </p>
        <p className='clearfix'>
        Note: functions in red indicate that these functions are not sufficiently satisfied (less than 3) in at least one of the current products.
        </p>

<div className='overlay'>

        <MatrixDisplay
          title=""
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

</div>


<div className="divLine"></div>

<p className='clearfix'>
<b>2) Satisfaction level of each environmental sustainability requirement for current products</b>
</p>

<p className='clearfix'>
Note: requirements in red indicate that these functions are not sufficiently satisfied (less than 3) in at least one of the current products.
</p>



<div className='overlay'>
        <MatrixDisplay
<<<<<<< HEAD
          title="Requirement vs. Product"
          colNames={this.state.related_module_col_list}
=======
          title=""
          colNames={this.props.productArchitecture}
>>>>>>> nbbranch10
          rowNames={this.props.requirements}
          matrixContent={this.state.mat_col_append}
          bgColor={'rgba(210,210,177,0.6)'}

          editCell={null}
          canEditCells={false}
          numberType='#' // | bin | % | # |
          editType='input'// | dropDown | input |
          dropDownChoices={null}
          averages={this.state.rp_avg}
        />
</div>



<div className="divLine"></div>


        <p className='clearfix'>
        <b>3) Modules required to be replaced</b>
        </p>

          <ListStuffSimple
              list={this.state.modules_to_replace}
          />
          
        <div id='lowerButtons'>
          <LinkContainer to='/Phases/PhaseOne/Input'>
            <Button id='backBtn'><i id='chevronLeft' className="fa fa-chevron-left"/>Back</Button>
          </LinkContainer>
          <LinkContainer to='/Phases/PhaseTwo/Input'>
            <Button style={{float: 'right'}} id='continueBtn'>Continue<i id='chevronRight' className="fa fa-chevron-right"/></Button>
          </LinkContainer>
        </div>



      </div>
    );
  }
}
