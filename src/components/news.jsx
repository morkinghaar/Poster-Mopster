import React from 'react';
import Localization from '../stores/localization.js';
import store from '../stores/store.js';
import Blog from './blog.jsx';
import {observer} from 'mobx-react';
import Blogs from '../stores/blogs.json'


observer(store)
const news = (props) => {
  var time = new Date().toLocaleTimeString();

  return <div className = "news-container">
    <h2>{Localization.news.title}</h2>
      {
        Blogs.blogs.map((blog, i)=>
        <Blog key={i} blog={blog} />
      )
      }
    </div>;
}

export default news;
