

import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {CSVLink, CSVDownload} from 'react-csv';
import './Save.css';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';


const empty = [];

class Save extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data:empty,

      //Phase 1 OUTPUT
      fp_avg: null,      // averages for function product matrix
      rp_avg: null,      // averages for requirement product matrix
      relation_mat: null,//Used to hold the matrix of relationships for Requirement v Product Matrix
      relation_list:null,//Used to hold list of related modules.
      related_module_col_list:null,//Used to add Related Modules to col list in matrix
      modules_to_replace:null,//Holds a list of the final modules that need to be replaced.
      functionVproduct: null,
      requirementVproduct: null,

      //Phase 2 Output

      //Phase 3 OUTPUT
      fa_matrix: null,
      ra_matrix: null,
      ea_matrix: null,
      fa_avg: null,
      ra_avg:null


    };
    this.combineData = this.combineData.bind(this);

    //Phase 1 OUTPUT
    this.math = require('mathjs');
    this.matrixMult = this.matrixMult;
    this.findRelation = this.findRelation;
    this.functionProduct = this.functionProduct;
    this.relatedModules = this.relatedModules;
    this.mat_col_append = this.mat_col_append;
    this.findReplace = this.findReplace;
    this.final_replace = this.final_replace;

    //Phase 2 OUTPUT
    this.findBools = this.findBools;

    //Phase 3 OUTPUT
    //this.matrixMult = this.matrixMult;
    //this.findRelation = this.findRelation;
    //this.functionProduct = this.functionProduct;
    this.selectionMatrix = this.selectionMatrix;
  }

  //Phase 1 OUTPUT

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

//Phase2 OUTPUT
          findBools(selected,accepted){
            let results = [];
            for(var i=0;i<selected.length;i++){
              if(accepted.includes(selected[i])){
                results.push(true);
              }
              else{
                results.push(false);
              }
            }
            return results;
          }
//Phase 3 OUTPUT
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


  combineData() {
    var newData = [];
    var holder = [];

    var ModuleThresh = {
      hazard: this.props.thresholds[0].hazardousMaterialUse,
      recycle: this.props.thresholds[0].recyclability,
      renew: this.props.thresholds[0].renewableMaterialUse
    }
    var ModuleThreshArr = [ModuleThresh.hazard,ModuleThresh.recycle,ModuleThresh.renew]; //used for threshold check
    var SupplierThresh = {
      iso: (this.props.thresholds[1].ISO? 1: 0),
      recycle: this.props.thresholds[1].recycledMaterials,
      pack: this.props.thresholds[1].packageRecycling
    }
    var SupplierThreshArr=[SupplierThresh.iso,SupplierThresh.recycle,SupplierThresh.pack];

    newData.push(["Phase One Input:"]);
    newData.push([]);//Empty row for spacing

    newData.push(["","Function List:"]);
    holder = this.props.functions.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Module List:"]);
    holder = this.props.modules.slice(0);
    holder.unshift("");//Basically acts as a tab
    newData.push(holder);
    newData.push([]);

    newData.push(["","Requirement List:"]);
    holder = this.props.requirements.slice(0);
    holder.unshift("");
    newData.push(holder);
    newData.push([]);

    newData.push(["","Requirement-Function Matrix:"]);
    this.props.requirementFunctionMatrix._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    newData.push(["","Function-Module Matrix:"]);
    this.props.functionModuleMatrix._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    newData.push(["","Module-Architecture Matrix:"]);
    this.props.moduleArchitectureMatrix._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    //============================================

    newData.push(["Phase One Output:"]);
    newData.push([]);//Empty row for spacing

    newData.push(["","Average functional satisfaction levels for new product architectures:"]);
    this.state.functionVproduct.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push(["","Average:"]);
    holder = this.state.fp_avg.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Satisfaction level of each environmental sustainability requirement for current products:"]);
    this.state.mat_col_append.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push(["","Average:"]);
    holder = this.state.rp_avg.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Modules to be Replaced:"]);
    holder = this.state.modules_to_replace.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    //============================================

    newData.push(["Phase Two Input:"]);
    newData.push([]);

    newData.push(["","Alternative Modules List:"]);
    holder = this.props.selectedAlternates.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Related Suppliers List:"]);
    holder = this.props.selectedSuppliers.slice(0);
    holder.unshift("");//Basically acts as a tab
    newData.push(holder);
    newData.push([]);

    //ModuleThreshArr
    newData.push(["","Module Threshold List:"]);
    newData.push(["","Hazardous Material Use:", "Recyclability:", "Renewable Material Use:"]);
    holder = ModuleThreshArr.slice(0);
    holder.unshift("");//Basically acts as a tab
    newData.push(holder);
    newData.push([]);

    //SupplierThreshArr
    newData.push(["","Supplier Threshold List:"]);
    newData.push(["","	ISO 14001", "Use of Recycled Materials", "Environmentally Friendly Packaging"]);
    holder = SupplierThreshArr.slice(0);
    holder.unshift("");//Basically acts as a tab
    newData.push(holder);
    newData.push([]);


    //============================================

    newData.push(["Phase Two Output:"]);
    newData.push([]);//Empty row for spacing

    newData.push(["","Filtering Results:"]);
    //
    holder = this.props.selectedAlternates.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    holder = this.findBools(this.props.selectedAlternates,this.props.acceptedAlternates).slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);
    //
    holder = this.props.selectedSuppliers.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    holder = this.findBools(this.props.selectedSuppliers,this.props.acceptedSuppliers).slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Final New Module and Supplier List:"]);
    newData.push(["","Accepted Alternates:"]);
    holder = this.props.acceptedAlternates.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Accepted Suppliers:"]);
    holder = this.props.acceptedSuppliers.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    //===================================================================

    newData.push(["Phase Three Input:"]);
    newData.push([]);

    //Function / Module Matrix
    newData.push(["","Function / Module Matrix:"]);
    this.props.functionAltModuleMatrix._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    //Supplier / Module
    newData.push(["","Supplier / Module Matrix:"]);
    this.props.supplierAltModuleMatrix._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    //Module / Product Architecture
    newData.push(["","Module / Product Architecture Matrix:"]);
    this.props.moduleProductArchitecture._data.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    //============================================

    newData.push(["Phase Three Output:"]);
    newData.push([]);//Empty row for spacing

    newData.push(["","Average functional satisfaction levels for new product architectures:"]);
    this.state.fa_matrix.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push(["","Average:"]);
    holder = this.state.fa_avg.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Average requirement satisfaction levels for new product architectures:"]);
    this.state.ra_matrix.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push(["","Average:"]);
    holder = this.state.ra_avg.slice(0);//Make sure two copies aren't pointing at same memery location
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Suppliers selected for new product architectures:"]);
    this.state.ea_matrix.map(function(item) {
      holder = item.slice(0);
      holder.unshift("");
      newData.push(holder);
    });
    newData.push([]);

    this.setState({
      data: newData
    });
    console.log("===Downloading Data===");
    console.log(this.state.data);
  }

  render(){
    //Phase 1 Output

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

    //Phase2 OUTPUT

    //Phase 3 OUTPUT
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
      <div onClick={() => this.combineData()}>
        <CSVLink style={this.props.style} filename='SPASS_Data.csv' data={this.state.data} >Download All Input & Output Data</CSVLink>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    functions: state.functionList,
    modules:state.moduleList,
    requirements:state.requirementList,
    //Phase2
    selectedAlternates: state.selectedAlternates,
    selectedSuppliers: state.selectedSuppliers,
    thresholds: state.thresholds,

    //Phase3
    functionAltModuleMatrix: state.functionAltModuleMatrix,
    supplierAltModuleMatrix:state.supplierAltModuleMatrix,
    moduleProductArchitecture:state.moduleProductArchitecture,

    productArchitecture: state.productArchitecture,
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    functionModuleMatrix: state.functionModuleMatrix,
    moduleArchitectureMatrix: state.moduleArchitectureMatrix,

    acceptedAlternates: state.acceptedAlternates,
    acceptedSuppliers: state.acceptedSuppliers,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({


  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(Save);
