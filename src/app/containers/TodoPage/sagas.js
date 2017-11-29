import { fork, takeEvery } from 'redux-saga/effects';
import * as con from './constants';

export function* addListWatcher() {
  yield* takeEvery(con.TODO_ADD, function ({ payload }) {
    try {
      console.log('TODO_ADD');
      console.log(payload);
    } catch (error) {
      //
    }
  });
}

export function* editListWatcher() {
  yield* takeEvery(con.TODO_EDIT, function ({ payload }) {
    try {
      console.log('TODO_EDIT');
      console.log(payload);
    } catch (error) {
      //
    }
  });
}

export function* deleteListWatcher() {
  yield* takeEvery(con.TODO_DELETE, function ({ payload }) {
    try {
      console.log('TODO_DELETE');
      console.log(payload);
    } catch (error) {
      //
    }
  });
}

// error injectSaga: Expected a valid saga descriptor
// export default [
//   addListWatcher,
//   editListWatcher,
//   deleteListWatcher,
// ];

export function* defaultSaga() {
  yield fork(addListWatcher);
  yield fork(editListWatcher);
  yield fork(deleteListWatcher);
}

// All sagas to be loaded
export default defaultSaga;