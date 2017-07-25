export const removeFunction = (index) =>{
  console.log("You are removing a function");
  //console.log(FunctionName);
  return{
    type:"REMOVE_FUNCTION",
    payload:index
  }
};

export const addFunction = (FunctionName) =>{
  console.log("You added a function");
  console.log(FunctionName);
  return{
    type:"ADD_FUNCTION",
    payload:FunctionName
  }
};
