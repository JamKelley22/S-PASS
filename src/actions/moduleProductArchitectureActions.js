export const addRowMPAMat = () =>{
  return{
    type:"ADD_ROW_MOD_PROD_ARCH",
    //payload:index
  }
};

export const removeRowMPAMat = (index) =>{
  return{
    type:"REMOVE_ROW_MOD_PROD_ARCH",
    payload:index
  }
};

  export const editCellMPAMat = (i,j,data) =>{
    return{
      type:"EDIT_CELL_MOD_PROD_ARCH",
      payload:[i,j,data]
    }
};
