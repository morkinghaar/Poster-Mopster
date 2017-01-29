import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import {observer} from 'mobx-react';



var obs = observer(store);

const service = (props) => {
  return <div className="service">
    <h2>{props.params.service}</h2>
    </div>;
}

export default service;
