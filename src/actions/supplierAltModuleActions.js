export const addRowSaMMat = () =>{
  return{
    type:"ADD_ROW_SUP_ALT_MOD",
    //payload:index
  }
};

export const removeRowSaMMat = (index) =>{
  return{
    type:"REMOVE_ROW_SUP_ALT_MOD",
    payload:index
  }
};

export const removeColSaMMat = (index) =>{
  return{
    type:"REMOVE_COL_SUP_ALT_MOD",
    payload:index
  }
};

export const addColSaMMat = () =>{
  return{
    type:"ADD_COL_SUP_ALT_MOD",
    //payload:index
  }
};

export const editCellSaMMat = (i,j,data) =>{
  return{
    type:"EDIT_CELL_SUP_ALT_MOD",
    payload:[i,j,data]
  }
};
