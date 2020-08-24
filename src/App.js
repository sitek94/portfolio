import React, { useState } from 'react';

import './sass/main.scss';

import Header from './components/header';

import About from './components/About';
import Features from './components/features';
import Projects from './components/projects';
import Footer from './components/footer';
import Popup from './components/Popup';
import Navigation from './components/navigation';

function App() {
  


  return (
    <div className="light-theme">
      <Navigation />
      <Header />
      <About />
      <Features />
      <Projects />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
