var math=require('mathjs');
const initialState = math.matrix([
  [0,0,0],//[1,0,0],
  [0,0,0],//[0,1,0],
  [0,0,0],//[0,0,1],
  [0,0,0],//[1,1,0],
  [0,0,0],//[1,1,0],
  [0,0,0],//[0,0,1],
  [0,0,0],//[0,0,0],
  [0,0,0],//[1,1,0],
  [0,0,0],//[1,1,1],
  [0,0,0]//[1,1,1]
  ]);

  export default function(state = initialState, action){
    switch(action.type){

      case "ADD_ROW_MOD_PROD_ARCH":
      console.log("==========MASASHI LOOK HERE============");

      if(state._size.length==1||isNaN(state._size[1])){
        console.log("INSIDE IF");
        let newMat = math.matrix();
        newMat.resize([1,0]);
        console.log(newMat);
        return newMat;
      }
      var newMat = math.matrix(state._data);
      newMat.resize([(state._size[0]+1),state._size[1]]);
      return newMat;
      break;

      case "REMOVE_ROW_MOD_PROD_ARCH":{
        var newMat = {...math.matrix(state._data)};
        newMat._data.splice(action.payload,1);
        newMat._size[0]-=1;
        var data = newMat._data;
        var size = newMat._size;
        return {...state,_data:data,_size:size};
        break;
      }

      case "REMOVE_COL_MOD_PROD_ARCH":{
        var newMat = {...math.matrix(state._data)};
        var i;
        for(i=0;i<newMat._size[0];i++){
          newMat._data[i].splice(action.payload,1);
        }
        newMat._size[1]-=1;
        return {...state,_data:newMat._data,_size: newMat._size};
        break;
      }

      case "ADD_COL_MOD_PROD_ARCH":{
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

      case "EDIT_CELL_MOD_PROD_ARCH":{
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
