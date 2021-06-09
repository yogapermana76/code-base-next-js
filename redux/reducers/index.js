import { combineReducers } from 'redux';
import layout from './layout';
import auth from './auth';
import setting from './setting';

const reducerRoot = () => combineReducers({
  layout,
  auth,
  setting,
});

export default reducerRoot
