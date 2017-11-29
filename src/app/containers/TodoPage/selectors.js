import { createSelector } from 'reselect';
const selectTodoPageDomain = () => (state) => state.get('todoPage');

const selectTodoList = () => createSelector(
  selectTodoPageDomain(),
  (substate) => substate.get('todoList').toJS()
);

export {
  selectTodoList,
};
