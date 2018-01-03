const initialState=
[
  {
    name:"S1",
    ISO:1,
    recycledMaterials:5,
    packageRecycling:0.9
  },
  {
    name:"S2",
    ISO:1,
    recycledMaterials:4,
    packageRecycling:0.9
  },
  {
    name:"S3",
    ISO:0,
    recycledMaterials:1,
    packageRecycling:0.2
  }
]

export default function(state=initialState,action){
  //console.log("Action.type " + action.type);
  //console.log("Action.payload " + action.payload);
  if(action.type == "ADD_NEW_SUPPLIER") {
    console.log("=========adding a supplier=======");
    //console.log(this.state);
    return [...state,action.payload];
    //make a new supplier HERE bv
  }
  console.log("not adding a supplier");
  return state;
}
