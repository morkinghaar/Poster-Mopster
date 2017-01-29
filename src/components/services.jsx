import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';
import Service from './service.jsx';
import NavLink from './static/NavLink.jsx';

var obs = observer(store);

const home = (props) => {
  const {main} = props;
  return <div className="services"><h2>{Localization.services.title}</h2>
    <ul>
      <li><NavLink to={{pathname: "/services/me", query: {locale: store.currentLang}}} activeStyle={{color: 'red'}}>{Localization.service.title}</NavLink></li>
    </ul>
    {main}

  </div>;
}

export default home;
