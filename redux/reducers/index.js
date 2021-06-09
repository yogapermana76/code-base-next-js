import { combineReducers } from 'redux';
import layout from './layout';
import auth from './auth';
import setting from './setting';
import home from './home';

const reducerRoot = () => combineReducers({
  layout,
  auth,
  setting,
  home,
});

export default reducerRoot
