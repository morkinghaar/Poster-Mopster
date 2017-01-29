import React from 'react';
import {Link, browserHistory} from 'react-router';
import NavLink from './NavLink.jsx';
import Localization from '../../stores/localization.js';
import store from '../../stores/store.js';
import cookie from 'react-cookie';
import {observer} from 'mobx-react';




@observer class navbar extends React.Component {
  render() {
    var langs = Localization.getAvailableLanguages();


    const changeLang = (event) => {
      cookie.save('setLang', event.target.value, { path: '/' });
      store.currentLang = event.target.value;
      const location = this.props.location;
      browserHistory.replace({pathname: location.pathname, query:{locale: event.target.value} });


    }
      return <div>
              <ul>
                <li><NavLink to={{pathname: '/services', query: {locale: store.currentLang} }}  activeStyle={{color: 'red'}}>{Localization.nav.services}</NavLink></li>
                <li><NavLink to={{pathname: '/news', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{Localization.nav.news}</NavLink></li>
                <li><NavLink to={{pathname: '/about', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{Localization.nav.team}</NavLink></li>
                <li><NavLink to={{pathname: '/contacts', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{Localization.nav.contacts}</NavLink></li>
              </ul>
              <select onChange={changeLang} value={store.currentLang}>
                {langs.map(function(lang, index){
                  return <option value={lang} key={index}>{lang}</option>
                })};

              </select>
        </div>;
  };
}

export default navbar;
