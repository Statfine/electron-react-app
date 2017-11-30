import { createSelector } from 'reselect';

const selectrequrestPageDomain = () => (state) => state.get('RequrestPage');

const selectDataList = () => createSelector(
  selectrequrestPageDomain(),
  (substate) => substate.get('dataList').toJS()
);

const selectRequestingBool = () => createSelector(
  selectrequrestPageDomain(),
  (substate) => substate.get('fetchRequestingBool')
);

const selectError = () => createSelector(
  selectrequrestPageDomain(),
  (substate) => substate.get('error')
);

export {
  selectDataList,
  selectRequestingBool,
  selectError,
};
