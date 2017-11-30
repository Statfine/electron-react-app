import {
  fork,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as con from './constants';
import {
  fetchListSuc,
  fetchListError,
} from './actions';
import api from './api';

export function* fetchListSaga() {
  yield takeLatest(con.FTECH_LIST, function* ({ payload }) {
    try {
      const result = yield call(api.fetchNetList, payload);
      yield put(fetchListSuc(result.newslist));
    } catch (error) {
      yield put(fetchListError(error));
    }
  });
}

export function* defaultSaga() {
  yield fork(fetchListSaga);
}

// All sagas to be loaded
export default defaultSaga;
