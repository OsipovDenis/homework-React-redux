const initialState = {
	photos: [],
};

export default function photos(state = initialState, action){
	switch (action.type) {

		case 'SET_PHOTOS':
			return Object.assign( {}, state, { photos: action.photos } );

		default:
			return state;
	}
}