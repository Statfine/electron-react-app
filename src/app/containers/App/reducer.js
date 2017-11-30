/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import * as con from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: true,
  sum: 0,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case con.REFRESH_TOKEM:
    return state.set('loading', !state.get('loading'));
    default:
      return state;
  }
}

export default appReducer;
