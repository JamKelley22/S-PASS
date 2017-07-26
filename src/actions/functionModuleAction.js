export const addRowFMMat = () =>{
  return{
    type:"ADD_ROW_FUN_MOD",
    //payload:index
  }
};

export const removeRowFMMat = (index) =>{
  return{
    type:"REMOVE_ROW_FUN_MOD",
    payload:index
  }
};
