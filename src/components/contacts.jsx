import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';

var obs = observer(store);

const contacts = (props) => {
  return <h2>{Localization.contacts.title}</h2>;
}

export default contacts;
