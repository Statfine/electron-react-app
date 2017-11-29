import { fromJS } from 'immutable';
import * as con from './constants';

const initialState = fromJS({
  error: '',
  dataList: [],
  fetchRequestingBool: false,
});

function requrestPageReducer(state = initialState, action) {
  switch (action.type) {
    case con.FTECH_LIST:
      return state.set('fetchRequestingBool', true);
    case con.FTECH_LIST_SUC:
      return state.set('fetchRequestingBool', false)
        .set('error', '')
        .set('dataList', fromJS(action.payload));
    case con.FTECH_LIST_ERROR:
      return state.set('fetchRequestingBool', false)
        .set('error', action.payload);
    default:
      return state;
  }
}

export default requrestPageReducer;