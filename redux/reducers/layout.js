import Immutable from 'seamless-immutable';
import actionTypes from '@/redux/actions/layout'

const INIT_STATE = Immutable({
  menuStatus: false
})

const layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_MENU_STATUS:
      return state.merge({ menuStatus: action.value })
    default:
      return state
  }
}

export default layout