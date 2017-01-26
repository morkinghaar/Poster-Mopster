import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/wrapper/App';
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Contacts from './components/contacts.jsx';
import News from './components/news.jsx';


var routes =  <div>
                <Route path="/" component = {App}>
                  <IndexRoute components = {{main: Services}}/>
                  <Route path="/about" components = {{main: About}} >
                    <Route path="/about/:lang" components = {{main: About}} />
                  </Route>
                  <Route path="/services" components = {{main: Services}}>
                    <Route path="/services/:lang" components = {{main: Services}} />
                  </Route>
                  <Route path="/contacts" components = {{main: Contacts}}>
                    <Route path="/contacts/:lang" components = {{main: Contacts}} />
                  </Route>
                  <Route path="/news" components = {{main: News}}>
                    <Route path="/news/:lang" components = {{main: News}} />
                  </Route>
                </Route>
              </div>;



export default routes;
