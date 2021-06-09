import Immutable from 'seamless-immutable';
import actionTypes from '@/redux/actions/home';

const INIT_STATE = Immutable({
  products: []
})

const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return { 
        ...state,
        products: action.data 
      };
    default:
      return state;
  }
}

export default auth;