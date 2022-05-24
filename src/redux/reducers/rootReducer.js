import {combineReducers} from 'redux';
import auths from './auth';
import navigations from './navigation';

const rootReducer = combineReducers({
  auths,
  navigations,
});

export default rootReducer;
