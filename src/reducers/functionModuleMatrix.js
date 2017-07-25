var math=require('mathjs');
const initialState = math.matrix([
  [5,0,0,0,5,0,0,0],
  [0,0,0,0,3,0,0,0],
  [4,0,0,0,4,0,5,0],
  [3,4,5,2,1,4,0,4],
  [0,0,0,0,0,0,0,0],
  ]);

export default function(state = initialState, action){
  return state;
}
