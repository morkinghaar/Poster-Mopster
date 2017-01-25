import React from 'react';
import Localization from './localization.js';
import store from './store.js';
import {observer} from 'mobx-react';

var obs = observer(store);

const contacts = (props) => {
  Localization.setLanguage(store.currentLang);
  return <h2>{Localization.contacts_title}</h2>;
}

export default contacts;
