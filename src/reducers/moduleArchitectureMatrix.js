var math=require('mathjs');
const initialState = math.matrix([
[1,0],
[0,1],
[1,0],
[1,0],
[0,1],
[1,0],
[1,1],
[1,1],
  ]);

export default function(state = initialState, action){
  switch(action.type){
    case "ADD_ROW_MOD_ARC":
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
