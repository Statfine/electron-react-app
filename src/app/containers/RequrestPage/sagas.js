import {
  take,
  cancel,
  fork,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
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
      const list = result.newslist;
      yield put(fetchListSuc(list));
      // yield [call(roolMap, list)];

      const tasks = [];
      for (let index = 0; index < list.length; index += 1) {
        const element = list[index];
        const t = yield fork(rool, element);
        tasks.push(t);
      }
      yield take(LOCATION_CHANGE);
      yield tasks.map((v) => cancel(v));

    } catch (error) {
      yield put(fetchListError(error));
    }
  });
}

function* rool(item) {
  console.log(item.title);
  if (item.title === '') yield put(fetchListError(''));
}

// function* roolMap(list) {
//   yield put(fetchListSuc(list));
//   list.map((item) => {
//     return console.log(item);
//   });
// }

export function* defaultSaga() {
  yield fork(fetchListSaga);
}

// All sagas to be loaded
export default defaultSaga;
