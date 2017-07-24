//This file handles the reducers for Redux.
import {combineReducers} from "redux";

//Import all needed reducers here!-------------
import functionList from "./functionList";
import moduleList from "./moduleList";
import requirementList from "./requirementList";
//---------------------------------------------

export default combineReducers({
  //list reducers here for access in store.js
  requirementList,
  functionList,
  moduleList,

})
