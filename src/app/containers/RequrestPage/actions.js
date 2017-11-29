import * as con from './constants';

export function fetchList(payload) {
  return {
    type: con.FTECH_LIST,
    payload,
  };
}

export function fetchListSuc(payload) {
  return {
    type: con.FTECH_LIST_SUC,
    payload,
  };
}

export function fetchListError(payload) {
  return {
    type: con.FTECH_LIST_ERROR,
    payload,
  };
}