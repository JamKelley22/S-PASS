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

export const removeColFMMat = (index) =>{
  return{
    type:"REMOVE_COL_FUN_MOD",
    payload:index
  }
};

export const addColFMMat = () =>{
  return{
    type:"ADD_COL_FUN_MOD",
    //payload:index
  }
};
