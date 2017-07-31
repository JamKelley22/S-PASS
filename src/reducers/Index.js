//This file handles the reducers for Redux.
import {combineReducers} from "redux";

//Import all needed reducers here!-------------
import functionList from "./lists/functionList";
import moduleList from "./lists/moduleList";
import requirementList from "./lists/requirementList";
import productArchitecture from "./matrices/productArchitecture";
import requirementFunctionMatrix from "./matrices/requirementFunctionMatrix";
import functionModuleMatrix from "./matrices/functionModuleMatrix";
import moduleArchitectureMatrix from "./matrices/moduleArchitectureMatrix";
import altModuleData from "./data/altModuleData";
import supplierData from "./data/supplierData";
import selectedAlternates from "./lists/selectedAlternates";
import supplierList from "./lists/supplierList";
import newArchitectureList from "./lists/newArchitectureList";
//---------------------------------------------

export default combineReducers({
  //list reducers here for access in store.js
  requirementList,
  functionList,
  moduleList,
  requirementFunctionMatrix,
  productArchitecture,
  functionModuleMatrix,
  moduleArchitectureMatrix,
  supplierData,
  altModuleData,
  selectedAlternates,
  supplierList,
  newArchitectureList,
})
