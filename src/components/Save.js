

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
      data:empty
    };
    this.combineData = this.combineData.bind(this);
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

    this.setState({
      data: newData
    });
    console.log("===Downloading Data===");
    console.log(this.state.data);
  }

  render(){
    return(
      <div onClick={() => this.combineData()}>
        <CSVLink filename='SPASS_Data.csv' id='link' data={this.state.data} >Download Input Data</CSVLink>
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
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({


  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(Save);
