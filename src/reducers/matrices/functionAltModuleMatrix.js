var math=require('mathjs');
const initialState = math.matrix([//Idk how to get the initial width of a matrix
  [5,5,0,0,0,5,5,0,0,0],
  [4,4,0,0,0,4,3,0,0,0],
  [3,3,0,0,0,4,4,0,5,0],
  [3,3,4,5,4,5,1,5,0,4],
  [5,5,4,4,4,5,4,5,5,4]
  ]);
//initialState.resize([8,8]);


  export default function(state = initialState, action){
    switch(action.type){

      case "ADD_ROW_FUN_ALT_MOD":
      if(state._size.length==1||isNaN(state._size[1])){
        let newMat = math.matrix();
        newMat.resize([1,0]);
        console.log(newMat);
        return newMat;
      }
      var newMat = math.matrix(state._data);
      newMat.resize([(state._size[0]+1),state._size[1]]);
      return newMat;
      break;

      case "REMOVE_ROW_FUN_ALT_MOD":{
        var newMat = {...math.matrix(state._data)};
        newMat._data.splice(action.payload,1);
        newMat._size[0]-=1;
        var data = newMat._data;
        var size = newMat._size;
        return {...state,_data:data,_size:size};
        break;
      }

      case "REMOVE_COL_FUN_ALT_MOD":{
        var newMat = {...math.matrix(state._data)};
        var i;
        for(i=0;i<newMat._size[0];i++){
          newMat._data[i].splice(action.payload,1);
        }
        newMat._size[1]-=1;
        return {...state,_data:newMat._data,_size: newMat._size};
        break;
      }

      case "ADD_COL_FUN_ALT_MOD":{
        var newMat = math.matrix(state._data);
        console.log("----------Function Alt Matrix--------");
        console.log(newMat._size.length);
        if(newMat._size.length==1||isNaN(newMat._size[1])){
          newMat.resize([0,1]);
          console.log(newMat);
          return newMat;
        }
        newMat.resize([(state._size[0]),state._size[1]+1]);
        return newMat;
        break;
      }

      case "EDIT_CELL_FUN_ALT_MOD":{
        var newMat = math.matrix(state._data);
        console.log(action.payload[0]);
        console.log(action.payload[1]);
        console.log(action.payload[2]);
        newMat._data[action.payload[0]][action.payload[1]]=action.payload[2];
        return {...state,_data:newMat._data};
        break;
      }
    }
    return state;
  }
