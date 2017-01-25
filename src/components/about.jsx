import React from 'react';
import Localization from './localization.js';
import store from './store.js';
import {observer} from 'mobx-react';

observer(store)
const about = (props) => {
  Localization.setLanguage(store.currentLang);
  return <h2>{Localization.about_title}</h2>;
}

export default about;
