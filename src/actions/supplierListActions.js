export const addSupplier = (supplier) =>{
  return{
    type:"ADD_SUPPLIER",
    payload:supplier
  }
};

export const addNewSupplier = (supplierName,supplierISO,supplierMaterals,supplierPackage) =>{
  console.log("Hopefully adding a new supplier here");
  return{
    type:"ADD_NEW_SUPPLIER",
    payload:{
      name: supplierName,
      ISO: supplierISO,
      recycledMaterials: supplierMaterals,
      packageRecycling: supplierPackage
    }
  }
};
export const removeSupplier = (index) =>{
  console.log("You are removing an alternate");
  return{
    type:"REMOVE_SUPPLIER",
    payload:index
  }
};
