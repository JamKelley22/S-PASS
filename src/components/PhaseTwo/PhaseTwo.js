import React from 'react';
import {connect} from "react-redux"; //Connects the store to application.
import {Table, Tooltip, Form, InputGroup, OverlayTrigger, FormControl, FormGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import UniqueDropdown from './UniqueDropdown.js';
import {addAlternate,removeAlternate} from '../../actions/selectedAlternatesActions.js';
import {addSupplier,removeSupplier} from '../../actions/supplierListActions.js';
import {bindActionCreators} from 'redux';
import CustomPhaseTwoMatrix from '../Matrix/CustomPhaseTwoMatrix.js';
import MatrixDisplay from '../Matrix/Matrix.js';
import '../Matrix/Matrix.css';


class PhaseTwo extends React.Component{
  constructor(props) {
    super(props);
    this.math = require('mathjs');
    this.makeList = this.makeList;
    this.makeSupplierMatrix = this.makeSupplierMatrix;
    this.makeAlternateMatrix = this.makeAlternateMatrix;
  }

  makeList(data){
      let dataList = [];
      for(var key in data){
        //console.log(data[key].name);
        dataList.push(data[key].name);

      }
      //console.log(dataList);
      return dataList;
  }

  makeSupplierMatrix(selectedSuppliers,supplierData){
    let supplierMatrix = [];
    for(var supplier in selectedSuppliers){
      for(var key in supplierData){
        //console.log(supplier);
        if(selectedSuppliers[supplier]==supplierData[key].name){
          var temp = supplierData[key].packageRecycling*100;
          let tempString = temp.toString() + "%";
          supplierMatrix.push([
            (supplierData[key].ISO? "Yes":"No"),
            supplierData[key].recycledMaterials,
            tempString
          ]);
        }
      }
    }
    console.log("Supplier Matrix");
    console.log(supplierMatrix);
    return(supplierMatrix);
  }

  makeAlternateMatrix(selectedAlternates,alternateData){
    let alternateMatrix = [];
    for(var alternate in selectedAlternates){
      for(var key in alternateData){
        //console.log(supplier);
        if(selectedAlternates[alternate]==alternateData[key].name){
          var temp = alternateData[key].recyclingRate*100;
          console.log(temp);
          let tempString = temp.toString() + "%";
          alternateMatrix.push([
            alternateData[key].RoHS,
            tempString,
            alternateData[key].renewableMaterials
          ]);
        }
      }
    }
    console.log("alternateMatrix");
    console.log(alternateMatrix);
    return(alternateMatrix);
  }


  render(){
    let ModuleThresh = {
      hazard: 0,
      recycle: .5,
      renew: 0
    }
    let SupplierThresh = {
      iso: 0,
      recycle: .5,
      pack: 0
    }

    return(
      <div>

      <h1>New Architectures & Suppliers Input</h1>

      <UniqueDropdown
        title={'Alternate Modules'}
        dropDownChoices = {this.makeList(this.props.altModuleData)}
        dataValues = {this.props.selectedAlternates}
        addData = {this.props.addAlternate}
        removeData = {this.props.removeAlternate}
      />

      <UniqueDropdown
        title={'Alternate Suppliers'}
        dropDownChoices = {this.makeList(this.props.supplierData)}
        dataValues = {this.props.selectedSuppliers}
        addData = {this.props.addSupplier}
        removeData = {this.props.removeSupplier}
      />

      <CustomPhaseTwoMatrix
        ModuleThresh = {ModuleThresh}
        SupplierThresh = {SupplierThresh}
        dropDownChoices={[
          ['0 Imposible to contribute'],
          ['10 Nearly impossible to contribute'],
          ['20 Very unlikely to contribute'],
          ['30 Quite unlikely to contribute'],
          ['40 Possible to contribute'],
          ['50 Even chance to contribute'],
          ['60 Better than even chance to contribute'],
          ['70 Quite likely to contribute'],
          ['80 Very likely to contribute'],
          ['90 Nearly certain to contribute'],
          ['100 Certain to contribute']
        ]}
      />

      <MatrixDisplay
        title="Supplier Related Environmental Indicators"
        colNames={["Possibility of RoHS","Recycling Rate","Satisfaction Level of Using Renewable Materials"]}
        rowNames={this.props.selectedSuppliers}
        matrixContent={this.makeSupplierMatrix(this.props.selectedSuppliers,this.props.supplierData)}
        bgColor={'#7C7B50'}

        editCell={null}
        canEditCells={false}
        numberType='bin' // | bin | % | # |
        editType='input'// | dropDown | input |
        dropDownChoices={null}
      />

      <MatrixDisplay
        title="Supplier Related Environmental Indicators"
        colNames={["ISO 14001","Use of Recycled Materials","Environmental Friendly Packaging"]}
        rowNames={this.props.selectedAlternates}
        matrixContent={this.makeAlternateMatrix(this.props.selectedAlternates,this.props.altModuleData)}
        bgColor={'#7C7B50'}

        editCell={null}
        canEditCells={false}
        numberType='bin' // | bin | % | # |
        editType='input'// | dropDown | input |
        dropDownChoices={null}
      />

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseOne/Output'>
          <Button>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseTwo/Output'>
          <Button>Continue</Button>
        </LinkContainer>
      </div>



      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    supplierData: state.supplierData,
    altModuleData: state.altModuleData,
    selectedAlternates: state.selectedAlternates,
    selectedSuppliers: state.selectedSuppliers,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addAlternate: addAlternate,
    removeAlternate: removeAlternate,
    addSupplier: addSupplier,
    removeSupplier: removeSupplier,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseTwo);
