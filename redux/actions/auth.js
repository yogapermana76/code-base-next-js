import Immutable from 'seamless-immutable';

const FAILURE = 'auth/FAILURE';
const SIGN_IN = 'auth/SIGN_IN';
const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
const SIGN_UP = 'auth/SIGN_UP';
const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';


const actionTypes = Immutable({
  FAILURE,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
}); 

export default actionTypes;

export const failure = (error) => {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export const signUpSuccess = (data) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    data,
  };
}