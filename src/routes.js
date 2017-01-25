import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contacts from './components/contacts.jsx';


var routes =  <Route path="/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path="/about" component = {About}>
                  <Route path="/about/:lang" component = {About} />
                </Route>
                <Route path="/home" component = {Home}>
                  <Route path="/home/:lang" component = {Home} />
                </Route>
                <Route path="/contacts" component = {Contacts}>
                  <Route path="/contacts/:lang" component = {Contacts} />
                </Route>
              </Route>
;



export default routes;
