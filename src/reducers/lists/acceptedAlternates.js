const initialState=["A1","A3","A4","A6","A8","A10","A11","A13","A15","A17"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_ACCEPTED_ALTERNATE":{

          console.log("Adding  ACCEPTED Alternate");
          return [...state,action.payload]
          break;
        }
        case "REMOVE_ACCEPTED_ALTERNATE":{
          console.log("Removing ACCEPTED Alternate");
          if(state.length==1){
            return [];
          }
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
          break;
        }
      }
    return state;
}
