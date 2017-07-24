const initialState=
["Requirement1","Requirement2","Requirement3","Requirement4","Requirement5"]


export default function(state = initialState, action){
      switch(action.type){
        case "ADD_REQUIREMENT":
          console.log("Adding Requirement");
          return [...state,action.payload]
          break;
      }

    return state;
}
