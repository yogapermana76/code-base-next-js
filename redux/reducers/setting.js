import Immutable from 'seamless-immutable';
import actionTypes from '@/redux/actions/setting'

const INIT_STATE = Immutable({
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
});

const settings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
