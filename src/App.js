import React from 'react';

import './sass/main.scss';

import Header from './components/header';

import About from './components/about';
import Features from './components/features';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  

  return (
    <div className="light-theme"> 
      <Header />
      <About />
      <Features />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
