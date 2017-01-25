import Localization from 'react-localization';

let strings = new Localization({
  eng: {
    about_title: "This is about title",
    home_title: "This is home title",
    contacts_title: "This is contacts title"
  },
  rus: {
    about_title: "это название про нас",
    home_title: "это дом",
    contacts_title: "это контакты"
  },
  ukr: {
    about_title: "це назва",
    home_title: "це дiм",
    contacts_title: "це контакти"
  }
});


export default strings;
