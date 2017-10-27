const initialState=["S1","S2","S3"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_ACCEPTED_SUPPLIER":{

          console.log("Adding  ACCEPTED Alternate");
          return [...state,action.payload]
          break;
        }
        case "REMOVE_ACCEPTED_SUPPLIER":{
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
