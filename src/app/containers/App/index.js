import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../HomePage';
import TodoPage from '../TodoPage';
import AbortPage from '../../../App';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={TodoPage} />
          <Route path="/abort" component={AbortPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}