export const addRowMAMat = () =>{
  return{
    type:"ADD_ROW_MOD_ARC",
    //payload:index
  }
};

export const removeRowMAMat = (index) =>{
  return{
    type:"REMOVE_ROW_MOD_ARC",
    payload:index
  }
};

  export const editCellMAMat = (i,j,data) =>{
    return{
      type:"EDIT_CELL_MOD_ARC",
      payload:[i,j,data]
    }
};
