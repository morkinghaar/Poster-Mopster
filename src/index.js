import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './routes';
import App from './components/App';
import Localization from './components/localization.js';




ReactDOM.render(
  <Router history={browserHistory}>
  {Routes}
  </Router>,
  document.getElementById("main")
);
