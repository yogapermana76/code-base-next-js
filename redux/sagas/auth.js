import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { request } from '@/utils/request';
import BASE_URL from '@/utils/baseUrl';
import actionTypes, {
  failure,
  signUpSuccess
} from '@/redux/actions/auth';

function * signUp ({ param }) {
  // yield put(loading(true))
  const requestURL = `${BASE_URL}/api/auth/signup`
  const body = JSON.stringify(param)
  try {
    const res = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    })
    // yield put(notifSuccess(res.message))
    yield put(signUpSuccess(res))
    // yield call(history.push, '/signin')
  } catch (err) {
    const res = yield err.response.json()
    // yield put(loading(false))
  }
}

function* authSaga() {
  yield all([
    takeEvery(actionTypes.SIGN_UP, signUp),
  ]);
}

export default authSaga;