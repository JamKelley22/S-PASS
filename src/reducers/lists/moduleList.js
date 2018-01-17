const initialState=
["Lower Shell 1 (for Hexa-copter)",
"Lower Shell 2 (for Quad-Copter)",
"Knob",
"Upper Shell 1 (for Hexa-copter)",
"Upper Shell 2 (for Quad-Copter)",
"Battery Cover",
"Propeller",
"Propeller Shield"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_MODULE":
          console.log("Adding Module");
          return [...state,action.payload]
          break;
        case "REMOVE_MODULE":
          console.log("Removing Module");
          //var removed = [...state];
          //removed.splice(action.payload,action.payload);
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
          break;
        case "UPDATE_MODULE_LIST":
          console.log("Updating module list with");
          console.log(action.payload);
          return action.payload
          break;
      }
    return state;
}
