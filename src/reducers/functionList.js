//Default decalration for list of functions.
const initialState=
["Function1","Function2","Function3","Function4","Function5"]


export default function(state = initialState, action){
      switch(action.type){
        case "ADD_FUNCTION":
          console.log("MADE IT");
          return [...state,action.payload]
          break;
      }

    return state;
}
