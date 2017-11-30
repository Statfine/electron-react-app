import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectSum = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('sum')
);

export {
  makeSelectLoading,
  makeSelectSum,
};
