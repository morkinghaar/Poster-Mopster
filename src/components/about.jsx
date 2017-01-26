import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';

observer(store)
const about = (props) => {
  return <h2>{Localization.about.title}</h2>;
}

export default about;
