import { fromJS } from 'immutable';
import * as con from './constants';

const initialState = fromJS({
  todoList: [],
});

function liveReducer(state = initialState, action) {
  switch (action.type) {
    case con.TODO_ADD:
      return state.update('todoList', (list) => list.unshift(fromJS(action.payload)));
    case con.TODO_EDIT:
      return state.update('todoList', (todoList) => todoList.update(todoList.findIndex((item) => item.get('id') === action.payload.id),
        (item) => item.mergeDeep(action.payload)));
    case con.TODO_DELETE:
      return state.update('todoList', (todoList) => todoList.filter((v) => v.get('id') !== action.payload));
    default:
      return state;
  }
}

export default liveReducer;
