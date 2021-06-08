import { all } from "redux-saga/effects";

/* ------------- Sagas ------------- */

import auth from "./auth";

/* ------------- Connect Types To Sagas ------------- */

export default function* rootSaga() {
  yield all([
    auth,
  ]);
}
