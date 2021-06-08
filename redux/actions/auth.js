import Immutable from 'seamless-immutable';

const FAILURE = 'FAILURE';
const SIGN_IN = 'SIGN_IN';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_UP = 'SIGN_UP';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';


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