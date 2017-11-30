// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,MOUNT_NODE
  );

// ReactDOM.render(<App />, MOUNT_NODE);
// render();
registerServiceWorker();
