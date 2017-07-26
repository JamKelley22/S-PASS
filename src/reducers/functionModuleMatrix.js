var math=require('mathjs');
const initialState = math.matrix([
  [5,0,0,0,5,0,0,0],
  [0,0,0,0,3,0,0,0],
  [4,0,0,0,4,0,5,0],
  [3,4,5,2,1,4,0,4],
  [0,0,0,0,0,0,0,0],
  ]);

export default function(state = initialState, action){
  switch(action.type){
    case "ADD_ROW_FUN_MOD":
    console.log("ADDING A ROW");
    var newMat = math.matrix(state._data);
    //newMat.resize([2,2]);
    console.log(newMat);
    console.log(state._size[0]+1);
    console.log(state._size[1]);
    newMat.resize([(state._size[0]+1),state._size[1]]);
    console.log(newMat);
    return newMat;
    break;
  }
  return state;
}
