import React from 'react';
import Header from './header.jsx';
import Navbar from './navbar.jsx';



const app = (props) => {

    return (
      <div>
        <Header />
        <Navbar />
        <hr />
        {props.children}
      </div>
    );
}

export default app;
