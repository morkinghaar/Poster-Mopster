import React from 'react';
import Localization from '../../stores/localization.js';


const header = () => {
  return <h1>{Localization.header.title}</h1>;
}

export default header;
