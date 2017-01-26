import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './routes';
import App from './components/wrapper/App';
import Localization from './stores/localization.js';




ReactDOM.render(
  <Router history={browserHistory}>
  {Routes}
  </Router>,
  document.getElementById("main")
);
