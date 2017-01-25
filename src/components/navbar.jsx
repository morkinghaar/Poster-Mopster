import React from 'react';
import {Link, browserHistory} from 'react-router';
import NavLink from './NavLink.jsx';
import Localization from './localization.js';
import store from './store.js';

import {observer} from 'mobx-react';

var obs = observer(store);

const navbar = (props) => {
  var lang = Localization.getAvailableLanguages();
  const changeLang = (event) => {
    store.currentLang = event.target.value;
    store.setCurrentLang;
  }
    return <div>
            <ul>
              <li><NavLink to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>Home</NavLink></li>
              <li><NavLink to="/about" activeStyle={{color: 'red'}}>About</NavLink></li>
              <li><NavLink to="/contacts" activeStyle={{color: 'red'}}>Contacts</NavLink></li>
            </ul>
            <select onChange={changeLang}>
              {lang.map(function(lang, index){
                return <option value={lang} key={index}>{lang}</option>
              })};

            </select>
      </div>;
}

export default navbar;
