import React from 'react';

import Header from './components/Header';

import Layout from './layout';
import About from './components/About';
import Features from './components/Features';

function App() {
  

  return (
    <Layout theme="light-theme">
      <Header />
      <About />
      <Features />
    </Layout>
  );
}

export default App;
