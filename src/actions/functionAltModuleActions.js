export const addRowFaMMat = () =>{
  return{
    type:"ADD_ROW_FUN_ALT_MOD",
    //payload:index
  }
};

export const removeRowFaMMat = (index) =>{
  return{
    type:"REMOVE_ROW_FUN_ALT_MOD",
    payload:index
  }
};

export const removeColFaMMat = (index) =>{
  return{
    type:"REMOVE_COL_FUN_ALT_MOD",
    payload:index
  }
};

export const addColFaMMat = () =>{
  return{
    type:"ADD_COL_FUN_ALT_MOD",
    //payload:index
  }
};

export const editCellFaMMat = (i,j,data) =>{
  return{
    type:"EDIT_CELL_FUN_ALT_MOD",
    payload:[i,j,data]
  }
};
