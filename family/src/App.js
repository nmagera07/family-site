import React from 'react';
import './App.css';

import Header from './components/header'
import Location from './components/location'
import Menu from './components/menu'
import Contact from './components/contact'
import {FormApp} from './components/form'
import Footer from './components/footer'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Location />
      <Menu />
      {/* <Contact /> */}
      <FormApp />
      <Footer />
    </div>
  );
}

export default App;
