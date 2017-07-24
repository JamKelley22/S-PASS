export const addRequirement = (RequirementName) =>{
  return{
    type:"ADD_REQUIREMENT",
    payload:RequirementName
  }
};
