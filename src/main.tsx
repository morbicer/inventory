import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming'
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';

// prepare store
const history = createBrowserHistory();
const store = configureStore();
const theme = {
  shadows: [
    0,
    '0 0 1rem rgba(0, 0, 0, .25)',
  ],
  space: [
    0,
    '0.5rem',
    '1rem',
    '2rem',
  ],
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
