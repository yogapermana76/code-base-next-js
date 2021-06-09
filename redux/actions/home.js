import Immutable from 'seamless-immutable';

const LOAD_PRODUCTS = 'home/LOAD_PRODUCTS';
const LOAD_PRODUCTS_SUCCESS = 'home/LOAD_PRODUCTS_SUCCESS';

const actionTypes = Immutable({
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
});

export const loadProductsHome = (param) => {
  return {
    type: LOAD_PRODUCTS,
    ...param,
  };
}

export const loadProductsHomeSuccess = (data) => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    data,
  };
}

export default actionTypes;