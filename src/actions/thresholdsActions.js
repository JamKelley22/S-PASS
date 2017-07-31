export const editThreshold = (index,data) =>{
  return{
    type:"EDIT_THRESHOLD",
    payload:[index,data]
  }
};
