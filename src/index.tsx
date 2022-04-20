import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { App } from './App';
import { history } from './Helpers/history';

import './assets/styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Router history={history}>
      <React.Suspense fallback={<div>Loading</div>}>
        <App />
      </React.Suspense>
    </Router>
  </BrowserRouter>,
  document.getElementById('root'),
);
