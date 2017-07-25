var math=require('mathjs');
const initialState = math.matrix([
  [0.4, 0.2, 0.1, 0, 0],
  [0, 0, 0, 0.6, 0],
  [0, 0.1, 0, 0, 0.4],
  ]);

export default function(state = initialState, action){
  return state;
}
