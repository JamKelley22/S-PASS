export const addRowRFMat = () =>{
  return{
    type:"ADD_ROW_REQ_FUN",
    //payload:index
  }
};

export const removeRowRFMat = (index) =>{
  return{
    type:"REMOVE_ROW_REQ_FUN",
    payload:index
  }
};

export const removeColRFMat = (index) =>{
  return{
    type:"REMOVE_COL_REQ_FUN",
    payload:index
  }
};

export const addColRFMat = () =>{
  return{
    type:"ADD_COL_REQ_FUN",
    //payload:index
  }
};

export const editCellRFMat = (i,j,data) =>{
  return{
    type:"EDIT_CELL_REQ_FUN",
    payload:[i,j,data]
  }
};
