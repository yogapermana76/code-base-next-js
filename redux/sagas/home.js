import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { request } from '@/utils/request';
import BASE_URL from '@/utils/baseUrl';
import actionTypes, {
  loadProductsHomeSuccess
} from '@/redux/actions/home';

function* loadProductsHomeSaga({ param }) {
  // yield put(loading(true))
  const requestURL = `https://dev-api.fitcells.com/api/list-phone-codes`
  try {
    const res = yield call(request, requestURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    // yield put(notifSuccess(res.message))
    yield put(loadProductsHomeSuccess(res))
    // yield call(history.push, '/signin')
  } catch (err) {
    const res = yield err.response.json()
    // yield put(loading(false))
  }
}

function* homeSaga() {
  yield all([
    takeEvery(actionTypes.LOAD_PRODUCTS, loadProductsHomeSaga),
  ]);
}

export default homeSaga;