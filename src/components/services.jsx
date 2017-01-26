import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';



var obs = observer(store);

const home = (props) => {
  return <div className="services"><h2>{Localization.services.title}</h2></div>;
}

export default home;
