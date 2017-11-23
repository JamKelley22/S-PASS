const initialState=
[
  {
    name:"S1",
    ISO:true,
    recycledMaterials:5,
    packageRecycling:0.9
  },
  {
    name:"S2",
    ISO:true,
    recycledMaterials:4,
    packageRecycling:0.9
  },
  {
    name:"S3",
    ISO:false,
    recycledMaterials:1,
    packageRecycling:0.2
  }
]

export default function(state=initialState,action){
  if(action.type == "ADD_NEW_SUPPLIER") {
    console.log("=========adding a supplier=======");
    console.log(this.state);
    return [...state,action.payload]
    //make a new supplier HERE
  }
  console.log("not adding a supplier");
  return state;
}
