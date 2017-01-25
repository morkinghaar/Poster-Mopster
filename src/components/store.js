import {observable, action, autorun} from "mobx";

var lang = observable({
  currentLang: ''

});

autorun(()=>{
  lang.currentLang = 'eng';
});

export default lang;
