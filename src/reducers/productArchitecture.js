const initialState=
["Hexa-copter","Quad-Copter"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_PRODUCT_ARCHITECTURE":
          console.log("Adding Module");
          return [...state,action.payload]
          break;
      }

    return state;
}
