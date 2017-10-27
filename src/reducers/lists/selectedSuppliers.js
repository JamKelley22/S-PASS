const initialState=["S1","S2","S3"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_SUPPLIER":{
          console.log("Adding Supplier");
          return [...state,action.payload]
          break;
        }
        case "REMOVE_SUPPLIER":{
          console.log("Removing Supplier");
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
        }
      }
    return state;
}
