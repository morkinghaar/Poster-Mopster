import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';

observer(store)
const news = (props) => {
  return <h2>{Localization.news.title}</h2>;
}

export default news;
