//Default decalration for list of functions.
const initialState=
["Transform energy to torque",
"Accept recharge from external electric power",
"Provide propulsion",
"Protect motors and rotors from external impacts",
"Allow for reuse or recycling"
];


export default function(state = initialState, action){
      switch(action.type){
        case "ADD_FUNCTION":
          console.log("Adding Function");
          return [...state,action.payload]
          break;
      }

    return state;
}
