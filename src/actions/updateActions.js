/*export const updateRequirementList = (list) =>{
  return{
    type:"UPDATE_REQUIREMENT_LIST",
    payload:list
  }
};

export const updateFunctionList = (list) =>{
  console.log("UPDATE FUNCTION LIST ACTION");
  return{
    type:"UPDATE_FUNCTION_LIST",
    payload:list
  }
};
*/


export const updateRequirementList = (list) =>{
  console.log("Updating Requirement List");
  return{
    type:"UPDATE_REQUIREMENT_LIST",
    payload:list
  }
};

export const updateFunctionList = (list) =>{
  console.log("Updating Function List");
  return{
    type:"UPDATE_FUNCTION_LIST",
    payload:list
  }
};

export const updateModuleList = (list) =>{
  console.log("Updating Module List");
  return{
    type:"UPDATE_MODULE_LIST",
    payload:list
  }
};
