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
      var newMat = math.matrix(state._data);
      newMat.resize([(state._size[0]+1),state._size[1]]);
      return newMat;
    break;

    case "REMOVE_ROW_MOD_ARC":{
      var newMat = {...math.matrix(state._data)};
      newMat._data.splice(action.payload,1);
      newMat._size[0]-=1;
      var data = newMat._data;
      var size = newMat._size;
      return {...state,_data:data,_size:size};
      break;
    }
  }
  return state;
}
