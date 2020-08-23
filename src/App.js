import React from 'react';

import './sass/main.scss';

import Header from './sections/header';

import About from './sections/about';
import Features from './sections/features';
import Projects from './sections/projects';
import Footer from './sections/footer';

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
