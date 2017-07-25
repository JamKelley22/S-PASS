var math=require('mathjs');
const initialState = math.matrix([
[1,0],
[0,1],
[1,0],
[1,0],
[0,1],
[1,0],
[1,1],
[1,1],
  ]);

export default function(state = initialState, action){
  return state;
}
