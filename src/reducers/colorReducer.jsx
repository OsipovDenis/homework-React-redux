// Reducer
const initialState = {
  color: '#ffffff',
  colorName: 'White'
};

export default function color(state = initialState, action) {
  switch(action.type) {
    case 'SET_COLOR':
      return  Object.assign( {}, state, { color: action.color, colorName: action.colorName } );
    default:
      return state; 
  }
}