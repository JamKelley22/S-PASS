export const addSupplier = (supplier) =>{
  return{
    type:"ADD_SUPPLIER",
    payload:supplier
  }
};

export const removeSupplier = (index) =>{
  console.log("You are removing an alternate");
  return{
    type:"REMOVE_SUPPLIER",
    payload:index
  }
};
