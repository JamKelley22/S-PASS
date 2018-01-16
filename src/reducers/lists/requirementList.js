const initialState=
["Energy Efficiency",
"Durability",
"Low Environmental impact"]


export default function(state=initialState, action){
      switch(action.type){
        case "ADD_REQUIREMENT":
          console.log("Adding Requirement");
          return [...state,action.payload]
          break;
        case "REMOVE_REQUIREMENT":{
          console.log("Removing Requirement");
          //var removed = [...state];
          //removed.splice(action.payload,action.payload);
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
          break;
      }
      case "UPDATE_REQUIREMENT_LIST":
        console.log("Updating requirement list with");
        console.log(action.payload);
        return action.payload
        break;
    }
    return state;
}
