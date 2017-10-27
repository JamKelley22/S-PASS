const initialState=["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18"]

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
          break;
        }
      }
    return state;
}
