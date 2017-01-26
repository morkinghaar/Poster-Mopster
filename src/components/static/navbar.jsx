import React from 'react';
import {Link, browserHistory} from 'react-router';
import NavLink from './NavLink.jsx';
import Localization from '../../stores/localization.js';
import store from '../../stores/store.js';

import {observer} from 'mobx-react';

var obs = observer(store);

const navbar = (props) => {
  var lang = Localization.getAvailableLanguages();

  const changeLang = (event) => {
    store.currentLang = event.target.value;
    console.log(location);
    browserHistory.replace({location });
  }
    return <div>
            <ul>
              <li><NavLink to="/services" activeStyle={{color: 'red'}}>{Localization.nav.services}</NavLink></li>
              <li><NavLink to="/news" activeStyle={{color: 'red'}}>{Localization.nav.news}</NavLink></li>
              <li><NavLink to="/about" activeStyle={{color: 'red'}}>{Localization.nav.team}</NavLink></li>
              <li><NavLink to="/contacts" activeStyle={{color: 'red'}}>{Localization.nav.contacts}</NavLink></li>
            </ul>
            <select onChange={changeLang}>
              {lang.map(function(lang, index){
                return <option value={lang} key={index}>{lang}</option>
              })};

            </select>
      </div>;
}

export default navbar;
