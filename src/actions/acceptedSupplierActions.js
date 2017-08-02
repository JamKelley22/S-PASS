export const addAcceptedSupplier = (alternate) =>{
  return{
    type:"ADD_ACCEPTED_SUPPLIER",
    payload:alternate
  }
};

export const removeAcceptedSupplier = (index) =>{
  console.log("You are removing an alternate");
  return{
    type:"REMOVE_ACCEPTED_SUPPLIER",
    payload:index
  }
};
