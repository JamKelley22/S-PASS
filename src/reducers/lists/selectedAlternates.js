const initialState=["A1","A2","A3","A4"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_ALTERNATE":{
          console.log("Adding Alternate");
          return [...state,action.payload]
          break;
        }
        case "REMOVE_ALTERNATE":{
          console.log("Removing Alternate");
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
        }
      }
    return state;
}
