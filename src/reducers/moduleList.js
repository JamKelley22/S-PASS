const initialState=
["Module1","Module2","Module3","Module4","Module5"]

export default function(state = initialState, action){
      switch(action.type){
        case "ADD_MODULE":
          console.log("Adding Module");
          return [...state,action.payload]
          break;
      }

    return state;
}
