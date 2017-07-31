const initialState=[]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_ALTERNATE":{
          if(state.length==1){
            console.log("HERHERE");
            console.log(state);
            return state;
          }
          console.log("Adding Alternate");
          return [...state,action.payload]
          break;
        }
        case "REMOVE_ALTERNATE":{
          console.log("Removing Alternate");
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
          break;
        }
      }
    return state;
}
