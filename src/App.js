import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="">
        <Header />
        <Footer />
        <Main />

      </div>
    );
  }
}

export default App;
