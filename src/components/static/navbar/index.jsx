import React from 'react';
import {Link, browserHistory} from 'react-router';
import NavLink from '../../NavLink.jsx';
import store from '../../../stores/store.js';
import cookie from 'react-cookie';
import {observer} from 'mobx-react';




@observer class navbar extends React.Component {
  render() {
    const {localization} = this.props;
    var langs = localization.getAvailableLanguages();

    const changeLang = (event) => {
      cookie.save('setLang', event.target.value, { path: '/' });
      store.currentLang = event.target.value;
      const location = this.props.location;
      browserHistory.push({pathname: location.pathname, query:{locale: event.target.value} });
    }

    var menu = '';

    if(this.props.location.query.locale != null) {
      menu = <div>
        <li><NavLink to={{pathname: '/services', query: {locale: store.currentLang} }}  activeStyle={{color: 'red'}}>{localization.nav.services}</NavLink></li>
        <li><NavLink to={{pathname: '/news', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{localization.nav.news}</NavLink></li>
        <li><NavLink to={{pathname: '/about', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{localization.nav.team}</NavLink></li>
        <li><NavLink to={{pathname: '/contacts', query: {locale: store.currentLang} }} activeStyle={{color: 'red'}}>{localization.nav.contacts}</NavLink></li>
      </div>
    } else {
      menu = <div>
        <li><NavLink to='/services' activeStyle={{color: 'red'}}>{localization.nav.services}</NavLink></li>
        <li><NavLink to='/news'  activeStyle={{color: 'red'}}>{localization.nav.news}</NavLink></li>
        <li><NavLink to='/about' activeStyle={{color: 'red'}}>{localization.nav.team}</NavLink></li>
        <li><NavLink to='/contacts' activeStyle={{color: 'red'}}>{localization.nav.contacts}</NavLink></li>
      </div>
    }


      return <div>
              <ul>
                {menu}
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
