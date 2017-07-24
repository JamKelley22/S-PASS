const initialState=
["Energy Efficiency","Durability","Low Environmental impact"]


export default function(state = initialState, action){
      switch(action.type){
        case "ADD_REQUIREMENT":
          console.log("Adding Requirement");
          return [...state,action.payload]
          break;
      }

    return state;
}
