export const addFunction = (FunctionName) =>{
  console.log("You added a function");
  console.log(FunctionName);
  return{
    type:"ADD_FUNCTION",
    payload:FunctionName
  }
};
