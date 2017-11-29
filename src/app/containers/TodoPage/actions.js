import * as con from './constants';

export function todoAdd(payload) {
  return {
    type: con.TODO_ADD,
    payload,
  };
}

export function todoEdit(payload) {
  return {
    type: con.TODO_EDIT,
    payload,
  };
}

export function todoDelete(payload) {
  return {
    type: con.TODO_DELETE,
    payload,
  };
}
