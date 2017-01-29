import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/wrapper/App';
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Contacts from './components/contacts.jsx';
import News from './components/news.jsx';
import Service from './components/service.jsx';
import NotFound from './components/notFound.jsx';

var routes =  <div>
                <Route path="/" component = {App}>
                  <IndexRoute components = {{main: Services}} />
                  <Route path="about" components = {{main: About}} />


                  <Route path="services" components = {{main: Services}}>
                    <Route path=":service" components = {{main: Service}} />
                  </Route>
                  <Route path="services" components = {{main: Services}} />

                  <Route path="contacts" components = {{main: Contacts}} />
                  <Route path="news" components = {{main: News}}/>
                  <Route path="*" components = {{main: NotFound}}/>
                </Route>
              </div>;



export default routes;
