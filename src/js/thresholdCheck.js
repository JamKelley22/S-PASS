export const thresholdCheck = (data,check) =>{
  let approved = true;
  for(var i=0;i<check.length;i++){
    console.log("DATA CHECK");
    console.log(data[i]);
    console.log(check[i]);
    if(data[i]<check[i]){
      approved = false;
      break;
    }
  }
  return approved;
};

//Used to find Alternate in list
export const findAlt = (data,name) =>{
  for(var object in data){
    if(data[object].name == name){
      let dataArr = [data[object].RoHS,data[object].recyclingRate,data[object].renewableMaterials];
      return dataArr;
    }
  }
  return false;
};


export const altRemoveIndex=(data,thresh,list)=>{
  let removeIndex=[];
  let newThresh = [thresh[0],thresh[1],thresh[2]];
  //console.log("DATA++++!@+!@+!+!");
  //console.log(newThresh);
  //console.log(data);
  for(var key in list){
    let listObj = findAlt(data,list[key]);
    console.log("LIST OBJ");
    console.log(listObj);

    if(!thresholdCheck(listObj,newThresh)){
      removeIndex.push(Number(key));
    }
  }
  console.log("REMOVE INDEXES===================================================");
  console.log(removeIndex);
  return removeIndex;
};

export const altAddIndex = (data,thresh,selected,accepted)=>{
  let addIndex=[];
  let newThresh = [thresh[0],thresh[1],thresh[2]];
  for(var key in selected){
    if(!accepted.includes(selected[key])){
      let listObj = findAlt(data,selected[key]);
      if(thresholdCheck(listObj,newThresh)){
        addIndex.push(selected[key]);
      }
    }
  }
  return addIndex;
};

/*==============================================================================
SUPPLIER FUNCTIONS
==============================================================================*/
export const findSup = (data,name) =>{
  for(var object in data){
    if(data[object].name == name){
      let dataArr = [data[object].ISO,data[object].recycledMaterials,data[object].packageRecycling];
      return dataArr;
    }
  }
  return false;
};

export const supRemoveIndex=(data,thresh,list)=>{
  let removeIndex=[];
  let newThresh = [thresh[3],thresh[4],thresh[5]];
  console.log("DATA++++!@+!@+!+!");
  console.log(newThresh);
  console.log(data);
  for(var key in list){
    let listObj = findSup(data,list[key]);
    console.log("LIST OBJ");
    console.log(listObj);

    if(!thresholdCheck(listObj,newThresh)){
      removeIndex.push(Number(key));
    }
  }
  console.log("REMOVE INDEXES===================================================");
  console.log(removeIndex);
  return removeIndex;
};

export const supAddIndex = (data,thresh,selected,accepted)=>{
  let addIndex=[];
  let newThresh = [thresh[3],thresh[4],thresh[5]];
  for(var key in selected){
    if(!accepted.includes(selected[key])){
      let listObj = findSup(data,selected[key]);
      if(thresholdCheck(listObj,newThresh)){
        addIndex.push(selected[key]);
      }
    }
  }
  return addIndex;
};
