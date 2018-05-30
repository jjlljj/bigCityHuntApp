import { combineReducers } from 'redux';
import { huntsReducer } from './huntsReducer.js';

const rootReducer = combineReducers({
  hunts: huntsReducer
});

export default rootReducer;
