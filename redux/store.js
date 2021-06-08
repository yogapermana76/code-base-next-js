import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '@/redux/reducers';
import rootSaga from '@/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers(),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}
