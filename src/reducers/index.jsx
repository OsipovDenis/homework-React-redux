import { combineReducers } from 'redux';
import color from './colorReducer';
import photos from './photosReducer';

const reducers = combineReducers({
	color,
	photos
});

export default reducers;