import React from 'react';
import './App.css';

import Header from './components/header'
import Location from './components/location'
import Menu from './components/menu'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Location />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
