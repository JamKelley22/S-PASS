export const addRequirement = (RequirementName) =>{
  return{
    type:"ADD_REQUIREMENT",
    payload:RequirementName
  }
};

export const removeRequirement = (index) =>{
  console.log("You are removing a function");
  //console.log(FunctionName);
  return{
    type:"REMOVE_REQUIREMENT",
    payload:index
  }
};
