import React from 'react';
import Header from '../static/header.jsx';
import Navbar from '../static/navbar.jsx';
import Footer from '../static/footer.jsx';
import store from '../../stores/store.js';
import {observer} from 'mobx-react';
import cookie from 'react-cookie';
import Localization from '../../stores/localization.js';


@observer class App extends React.Component {
  componentWillMount() {
    if(this.props.location.query.locale != null){
      var avilableLangs = Localization.getAvailableLanguages();
        if(avilableLangs.indexOf(this.props.location.query.locale) >= 0 &&
           avilableLangs.indexOf(this.props.location.query.locale) !== '') {

          store.currentLang = this.props.location.query.locale;
          cookie.save('setLang', store.currentLang, { path: '/' });
          //console.log();
        }
    } else {
      store.currentLang = cookie.load('setLang') || store.defaultLang;
    }
  }


  constructor(props){
    super(props);

  }

  render() {

    const {router} = this.props;
    const {location} = this.props;
    Localization.setLanguage(store.currentLang);

    const {main} = this.props;
    return (
      <div>
        <Header />
        <Navbar location={location}/>
        <hr />
        {main}
        <Footer />
      </div>
    );
  }


}

export default App;
