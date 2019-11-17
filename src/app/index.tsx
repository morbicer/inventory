import * as React from 'react';
import { Route, Switch } from 'react-router';
// import { App as TodoApp } from 'app/containers/App';
import List from 'app/list/components';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={List} />
  </Switch>
));
