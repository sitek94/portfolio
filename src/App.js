import React from 'react';

import Header from './components/Header';

import Layout from './layout';
import About from './components/About';

function App() {
  

  return (
    <Layout theme="light-theme">
      <Header />
      <About />
    </Layout>
  );
}

export default App;
