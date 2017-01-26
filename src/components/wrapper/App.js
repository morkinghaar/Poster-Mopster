import React from 'react';
import Header from '../static/header.jsx';
import Navbar from '../static/navbar.jsx';
import Footer from '../static/footer.jsx';

import store from '../../stores/store.js';
import {observer} from 'mobx-react';

import Localization from '../../stores/localization.js';


@observer class App extends React.Component {

  render() {

      Localization.setLanguage(store.currentLang);

    const {main} = this.props;
    return (
      <div>
        <Header />
        <Navbar />
        <hr />
        {main}
        <Footer />
      </div>
    );
  }


}

export default App;
