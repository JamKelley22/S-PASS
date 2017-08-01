export const addAcceptedAlternate = (alternate) =>{
  return{
    type:"ADD_ACCEPTED_ALTERNATE",
    payload:alternate
  }
};

export const removeAcceptedAlternate = (index) =>{
  console.log("You are removing an alternate");
  return{
    type:"REMOVE_ACCEPTED_ALTERNATE",
    payload:index
  }
};
