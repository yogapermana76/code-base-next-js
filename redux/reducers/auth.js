import Immutable from 'seamless-immutable';
import actionTypes from '@/redux/actions/auth';

const INIT_STATE = Immutable({
  user: null,
  error: null
})

const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return { 
        ...state,
        authUser: action.data,
        user: action.data 
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return { 
        ...state,
        user: action.data 
      };
    case actionTypes.FAILURE:
      return ({ error: action.error });
    default:
      return state;
  }
}

export default auth;