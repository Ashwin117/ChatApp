import { combineReducers } from 'redux';
import textPoster from './textPoster';

const rootReducer = combineReducers({
	text: textPoster
});

export default rootReducer;