export const addAlternate = (alternate) =>{
  return{
    type:"ADD_ALTERNATE",
    payload:alternate
  }
};

export const removeAlternate = (index) =>{
  console.log("You are removing an alternate");
  return{
    type:"REMOVE_ALTERNATE",
    payload:index
  }
};
