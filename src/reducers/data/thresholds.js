const initialState=
[
  {
    name:"alternates",
    hazardousMaterialUse:4,//0
    recyclability:0.7,//1
    renewableMaterialUse:4,//2
  },
  {
    name:"suppliers",
    ISO:true,//3
    recycledMaterials:3,//4
    packageRecycling:0.8//5
  }
]

export default function(state=initialState,action){
  switch(action.type){
    case "EDIT_THRESHOLD":{
      let newEdit = {...state};
      switch(action.payload[0]){
        case 0:{
          newEdit[0].hazardousMaterialUse = action.payload[1];
          return newEdit;
          break;
        }
        case 1:{
          newEdit[0].recyclability = action.payload[1];
          return newEdit;
          break;
        }
        case 2:{
          newEdit[0].renewableMaterialUse = action.payload[1];
          return newEdit;
          break;
        }
        case 3:{
          console.log("ISO==================================");
          console.log(action.payload[1]);
          newEdit[1].ISO = (action.payload[1]==1? true : false);
          return newEdit;
          break;
        }
        case 4:{
          newEdit[1].recycledMaterials = action.payload[1];
          return newEdit;
          break;
        }
        case 5:{
          newEdit[1].packageRecycling = action.payload[1];
          return newEdit;
          break;
        }
      }
      break;
    }
  }
  return state;
}
