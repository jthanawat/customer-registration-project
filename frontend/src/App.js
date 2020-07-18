import React from 'react';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'
import Routes from './Routes';
import validate from 'validate.js';
import validators from './pages/Auth/validators';

const history = createBrowserHistory();

validate.validators = {
  ...validate.validators,
  ...validators
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <CssBaseline />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
