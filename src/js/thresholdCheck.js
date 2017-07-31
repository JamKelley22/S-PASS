export const thresholdCheck = (data,check) =>{
  let approved = true;
  for(var i=0;i<check.length;i++){
    if(data[i]<check[i]){
      approved = false;
      break;
    }
  }
  return approved;
};
