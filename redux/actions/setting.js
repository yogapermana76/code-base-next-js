import Immutable from 'seamless-immutable';

const SWITCH_LANGUAGE = 'setting/SWITCH_LANGUAGE';

const actionTypes = Immutable({
  SWITCH_LANGUAGE,
});


export const switchLanguage = (locale) => {
  return {
    type: SWITCH_LANGUAGE,
    payload: locale,
  };
}

export default actionTypes;