

import React from 'react';
import {Table, Tooltip,OverlayTrigger,ListGroup,ListGroupItem,Button,Image,Grid,Row,Col,Modal,Popover} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {CSVLink, CSVDownload} from 'react-csv';
import './Save.css';

import {connect} from "react-redux"; //Connects the store to application.
import {bindActionCreators} from 'redux';
import {addRequirement,removeRequirement} from '../../actions/requirementListActions.js';
import {removeFunction,addFunction} from '../../actions/functionListActions.js';
import {addModule,removeModule} from '../../actions/moduleListActions.js';
import {addRowRFMat,removeRowRFMat,removeColRFMat,addColRFMat,editCellRFMat
} from '../../actions/requirementFunctionAction.js';
import {addRowFMMat,removeRowFMMat,removeColFMMat,addColFMMat,editCellFMMat
} from '../../actions/functionModuleAction.js';
import {addRowMAMat,removeRowMAMat,editCellMAMat
} from '../../actions/moduleArchitectureAction.js';
import {addRowFaMMat,removeRowFaMMat} from '../../actions/functionAltModuleActions.js';
import {addRowMPAMat,removeRowMPAMat} from '../../actions/moduleProductArchitectureActions.js';



const empty =[];

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

    newData.push(["Phase One:"]);
    newData.push(["","Input:"]);
    newData.push([]);//Empty row for spacing

    newData.push(["","Function List:"]);
    holder = this.props.functions;
    holder.unshift(""); //need b/c unshift returns new length, not new array
    newData.push(holder);
    newData.push([]);

    newData.push(["","Module List:"]);
    holder = this.props.modules;
    holder.unshift("");//Basically acts as a tab
    newData.push(holder);
    newData.push([]);

    newData.push(["","Requirement List:"]);
    holder = this.props.requirements;
    holder.unshift("");
    newData.push(holder);
    newData.push([]);

    newData.push(["","Requirement-Function Matrix:"]);
    this.props.requirementFunctionMatrix._data.map(function(item) {
      holder = item.slice(0);//Make sure two copies aren't pointing at same memery location
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

    newData.push(["","Output:"]);
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
        <CSVLink filename='SPASS_Data.csv' id='link' data={this.state.data} >Download me</CSVLink>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    functions: state.functionList,
    modules:state.moduleList,
    requirements:state.requirementList,
    productArchitecture: state.productArchitecture,
    requirementFunctionMatrix: state.requirementFunctionMatrix,
    functionModuleMatrix: state.functionModuleMatrix,
    moduleArchitectureMatrix: state.moduleArchitectureMatrix,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addFunction : addFunction,
    addModule: addModule,
    removeFunction:removeFunction,
    addRequirement: addRequirement,
    removeRequirement: removeRequirement,
    removeModule: removeModule,
    addRowRFMat: addRowRFMat,
    addRowFMMat: addRowFMMat,
    addRowMAMat: addRowMAMat,
    removeRowRFMat: removeRowRFMat,
    removeRowFMMat: removeRowFMMat,
    removeRowMAMat: removeRowMAMat,
    removeColRFMat: removeColRFMat,
    addColRFMat: addColRFMat,
    removeColFMMat: removeColFMMat,
    addColFMMat: addColFMMat,
    editCellRFMat: editCellRFMat,
    editCellMAMat: editCellMAMat,
    editCellFMMat: editCellFMMat,
    addRowFaMMat:addRowFaMMat,
    removeRowFaMMat:removeRowFaMMat,
    removeRowMPAMat:removeRowMPAMat,
    addRowMPAMat: addRowMPAMat,


  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(Save);




/*




class PhaseOneIn extends React.Component{

  render(){
    return(
      <PhaseOneInput
      addFunction={this.props.addFunction}
      functions={this.props.functions}
      modules={this.props.modules}
      addModule={this.props.addModule}
      requirements={this.props.requirements}
      addRequirement={this.props.addRequirement}
      productArchitecture={this.props.productArchitecture}
      removeFunction={this.props.removeFunction}
      removeModule={this.props.removeModule}
      removeRequirement={this.props.removeRequirement}
      addRowRFMat={this.props.addRowRFMat}
      addRowFMMat={this.props.addRowFMMat}
      addRowMAMat={this.props.addRowMAMat}
      removeRowRFMat={this.props.removeRowRFMat}
      removeRowFMMat={this.props.removeRowFMMat}
      removeRowMAMat={this.props.removeRowMAMat}
      removeColRFMat={this.props.removeColRFMat}
      addColRFMat={this.props.addColRFMat}
      removeColFMMat={this.props.removeColFMMat}
      addColFMMat={this.props.addColFMMat}
      editCellRFMat={this.props.editCellRFMat}
      editCellMAMat={this.props.editCellMAMat}
      editCellFMMat={this.props.editCellFMMat}


      requirementFunctionMatrix={this.props.requirementFunctionMatrix}
      functionModuleMatrix={this.props.functionModuleMatrix}
      moduleArchitectureMatrix={this.props.moduleArchitectureMatrix}
      removeRowFaMMat={this.props.removeRowFaMMat}
      addRowFaMMat={this.props.addRowFaMMat}

      removeRowMPAMat={this.props.removeRowMPAMat}
      addRowMPAMat={this.props.addRowMPAMat}
      />
    );
  }
}


*/
