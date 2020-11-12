import { combineReducers } from 'redux';
import yearReducer from './yearReducer';

export default combineReducers({
  years: yearReducer,
});
