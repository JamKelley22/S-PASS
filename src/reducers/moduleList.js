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
      }

    return state;
}
