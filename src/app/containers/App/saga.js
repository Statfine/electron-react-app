/*
 * Auth saga
 */
import { takeLatest } from 'redux-saga/effects';
import { REFRESH_TOKEM } from './constants';

export function* watchRefreshToken() {
  yield takeLatest(REFRESH_TOKEM, function () {
    try {
      console.log('REFRESH_TOKEM');
    } catch (e) {
      // 
    }
  });
}

export default [
  watchRefreshToken,
];
