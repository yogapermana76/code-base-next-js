import { combineReducers } from 'redux';
import layout from './layout';
import auth from './auth';

const reducerRoot = () => combineReducers({
  layout,
  auth,
});

export default reducerRoot
