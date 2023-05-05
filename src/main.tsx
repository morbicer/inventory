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
  colors: {
    primary: 'purple',
    palette0: '#ffadad',
    palette1: '#ffd6a5',
    palette2: '#fdffb6',
    palette3: '#caffbf',
    palette4: '#9bf6ff',
    palette5: '#a0c4ff',
    palette6: '#bdb2ff',
  },
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
  fontFamily: {
    heading: 'Raleway, sans-serif',
  },
  breakpoints: ['40em', '52em', '80em', '120em'],
  radii: ['0.25rem', '0.5rem']
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
