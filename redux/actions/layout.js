import Immutable from 'seamless-immutable';

const UPDATE_MENU_STATUS = 'layout/UPDATE_MENU_STATUS';

const actionTypes = Immutable({
  UPDATE_MENU_STATUS,
});

export const updateMenuStatus = (value) => {
  return {
    type: actionTypes.UPDATE_MENU_STATUS,
    value,
  };
};

export default actionTypes;
