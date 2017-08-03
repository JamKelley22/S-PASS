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
import {editThreshold} from '../../actions/thresholdsActions.js';
import {thresholdCheck,findAlt,altRemoveIndex,altAddIndex,findSup,supRemoveIndex,supAddIndex
} from '../../js/thresholdCheck.js';
import {addAcceptedAlternate,removeAcceptedAlternate} from '../../actions/acceptedAlternatesActions.js';
import{addColSaMMat,removeColSaMMat,addRowSaMMat,removeRowSaMMat} from '../../actions/supplierAltModuleActions.js';
import {addAcceptedSupplier,removeAcceptedSupplier} from'../../actions/acceptedSupplierActions.js';
import {addColFaMMat,removeColFaMMat} from '../../actions/functionAltModuleActions.js';


class PhaseTwo extends React.Component{
  constructor(props) {
    super(props);
    this.math = require('mathjs');
    this.makeList = this.makeList;
    this.makeSupplierMatrix = this.makeSupplierMatrix;
    this.makeAlternateMatrix = this.makeAlternateMatrix;
    this.findAlt = findAlt.bind(this);
    this.altRemoveIndex = altRemoveIndex.bind(this);
    this.altAddIndex = altAddIndex.bind(this);
    //supplier
    this.findSup = findSup.bind(this);
    this.supAddIndex = supAddIndex.bind(this);
    this.supRemoveIndex = supRemoveIndex.bind(this);
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
    //console.log("Supplier Matrix");
    //console.log(supplierMatrix);
    return(supplierMatrix);
  }

  makeAlternateMatrix(selectedAlternates,alternateData){
    let alternateMatrix = [];
    for(var alternate in selectedAlternates){
      for(var key in alternateData){
        //console.log(supplier);
        if(selectedAlternates[alternate]==alternateData[key].name){
          var temp = alternateData[key].recyclingRate*100;
          //console.log(temp);
          let tempString = temp.toString() + "%";
          alternateMatrix.push([
            alternateData[key].RoHS,
            tempString,
            alternateData[key].renewableMaterials
          ]);
        }
      }
    }
    return(alternateMatrix);
  }


  render(){
    let ModuleThresh = {
      hazard: this.props.thresholds[0].hazardousMaterialUse,
      recycle: this.props.thresholds[0].recyclability,
      renew: this.props.thresholds[0].renewableMaterialUse
    }
    let ModuleThreshArr = [ModuleThresh.hazard,ModuleThresh.recycle,ModuleThresh.renew]; //used for threshold check
    let SupplierThresh = {
      iso: (this.props.thresholds[1].ISO? 1: 0),
      recycle: this.props.thresholds[1].recycledMaterials,
      pack: this.props.thresholds[1].packageRecycling
    }
    let SupplierThreshArr=[SupplierThresh.iso,SupplierThresh.recycle,SupplierThresh.pack];

    return(
      <div id='scroll'>

      <h1>New Architectures & Suppliers Input</h1>
      {console.log(ModuleThreshArr)}
      <UniqueDropdown
        title={'Alternate Modules'}
        dropDownChoices = {this.makeList(this.props.altModuleData)}
        dataValues = {this.props.selectedAlternates}
        addData = {this.props.addAlternate}
        removeData = {this.props.removeAlternate}
        data = {this.props.altModuleData} //Used for threshold check.
        threshold = {ModuleThreshArr} //Used for threshod check.
        findData = {this.findAlt}
        addAcceptedData = {this.props.addAcceptedAlternate}
        acceptedData = {this.props.acceptedAlternates}
        removeAcceptedData = {this.props.removeAcceptedAlternate}

        //used for accepted matrixContent
        addMatCol = {this.props.addColFaMMat}
        addMatCol2 = {this.props.addColSaMMat}
        removeMatData={this.props.removeColSaMMat}
        removeMatData2={this.props.removeColFaMMat}
      />

      <UniqueDropdown

        title={'Alternate Suppliers'}
        dropDownChoices = {this.makeList(this.props.supplierData)}
        dataValues = {this.props.selectedSuppliers}
        addData = {this.props.addSupplier}
        removeData = {this.props.removeSupplier}
        data = {this.props.supplierData} //Used for threshold check.
        threshold = {SupplierThreshArr} //Used for threshod check.
        findData = {this.findSup}
        addAcceptedData = {this.props.addAcceptedSupplier}
        acceptedData = {this.props.acceptedSuppliers}
        removeAcceptedData = {this.props.removeAcceptedSupplier}

        //used for accepted matrixContent
        //addMatCol = {this.props.addColFaMMat}
        //addMatCol2 = {this.props.addColSaMMat}
        addMatRow = {this.props.addRowSaMMat}
        removeMatData={this.props.removeRowSaMMat}
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
        editCell = {this.props.editThreshold}
        //====Alternate Modules====
        findRemoveAltIndex = {this.altRemoveIndex}
        findAddAltIndex = {this.altAddIndex}
        acceptedAlternates = {this.props.acceptedAlternates}
        altData = {this.props.altModuleData}
        selectedAlternates = {this.props.selectedAlternates}
        addAcceptedAlternate = {this.props.addAcceptedAlternate}
        removeAcceptedAlternate = {this.props.removeAcceptedAlternate}
        addColFaMMat = {this.props.addColFaMMat}
        removeColFaMMat = {this.props.removeColFaMMat}

      //=======Suppliers=======
        //custom functions
        findRemoveSupIndex = {this.supRemoveIndex}
        findAddSupIndex = {this.supAddIndex}

        //suppler store data
        acceptedSuppliers = {this.props.acceptedSuppliers}
        supData = {this.props.supplierData}
        selectedSuppliers = {this.props.selectedSuppliers}

        //add and remove supplier data actions
        addAcceptedSupplier = {this.props.addAcceptedSupplier}
        removeAcceptedSupplier = {this.props.removeAcceptedSupplier}
        addRowSaMMat = {this.props.addRowSaMMat}
        removeRowSaMMat = {this.props.removeRowSaMMat}
        addColSaMMat = {this.props.addColSaMMat}
        removeColSaMMat = {this.props.removeColSaMMat}
        removeRowSaMMat = {this.props.removeRowSaMMat}
      />

      <MatrixDisplay
        title="Module Related Environmental Indicators"
        colNames={["Possibility of RoHS","Recycling Rate","Satisfaction Level of Using Renewable Materials"]}
        rowNames={this.props.selectedAlternates}
        matrixContent={this.makeAlternateMatrix(this.props.selectedAlternates,this.props.altModuleData)}
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
        rowNames={this.props.selectedSuppliers}
        matrixContent={this.makeSupplierMatrix(this.props.selectedSuppliers,this.props.supplierData)}
        bgColor={'#7C7B50'}

        editCell={null}
        canEditCells={false}
        numberType='bin' // | bin | % | # |
        editType='input'// | dropDown | input |
        dropDownChoices={null}
      />

      <div id='lowerButtons'>
        <LinkContainer to='/Phases/PhaseOne/Output'>
          <Button id='backBtn'>Back</Button>
        </LinkContainer>
        <LinkContainer to='/Phases/PhaseTwo/Output'>
          <Button style={{float: 'right'}} id='continueBtn'>Continue</Button>
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
    thresholds: state.thresholds,
    acceptedAlternates: state.acceptedAlternates,
    acceptedSuppliers: state.acceptedSuppliers,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    //alternate module and accepted alternate module list actions
    addAlternate: addAlternate,
    removeAlternate: removeAlternate,
    addAcceptedAlternate: addAcceptedAlternate,
    removeAcceptedAlternate: removeAcceptedAlternate,

    //supplier list actions
    addSupplier: addSupplier,
    removeSupplier: removeSupplier,

    //threshold edit
    editThreshold : editThreshold,

    //Function alternate
    addColFaMMat: addColFaMMat,
    removeColFaMMat: removeColFaMMat,

    //accepted supplier actions
    addAcceptedSupplier: addAcceptedSupplier,
    removeAcceptedSupplier,removeAcceptedSupplier,

    //supplier alternate module matrix actions
    addColSaMMat:addColSaMMat,
    removeColSaMMat: removeColSaMMat,
    addRowSaMMat: addRowSaMMat,
    removeRowSaMMat: removeRowSaMMat,

  },dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(PhaseTwo);
