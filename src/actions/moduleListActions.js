export const addModule = (ModuleName) =>{
  return{
    type:"ADD_MODULE",
    payload:ModuleName
  }
};

export const removeModule = (index) =>{
  console.log("You are removing a function");
  //console.log(FunctionName);
  return{
    type:"REMOVE_MODULE",
    payload:index
  }
};
