//Default decalration for list of functions.
const initialState=
["Transform energy to torque",
"Accept recharge from external electric power",
"Provide propulsion",
"Protect motors and rotors from external impacts",
"Allow for reuse or recycling",
];

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_FUNCTION":
          console.log("Adding Function");
          return [...state,action.payload]
          break;
        case "REMOVE_FUNCTION":
          console.log("Removing Function");
          return[...state.slice(0,action.payload),
                ...state.slice(action.payload+1,state.length)]
          break;
        case "UPDATE_FUNCTION_LIST":
          console.log("Updating function list with");
          console.log(action.payload);
          return [action.payload]
          break;
      }
    return state;
}
