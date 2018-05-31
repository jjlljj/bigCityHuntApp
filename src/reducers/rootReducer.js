import { combineReducers } from 'redux';
import { huntsReducer } from './huntsReducer.js';
import { markerModalReducer, showMarkerModalReducer } from './markerModalReducer';

const rootReducer = combineReducers({
  hunts: huntsReducer,
  showMarkerModal: showMarkerModalReducer,
  markerModalContent: markerModalReducer
});

export default rootReducer;
