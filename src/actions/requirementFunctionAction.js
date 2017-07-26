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
