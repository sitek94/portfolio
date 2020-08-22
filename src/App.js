import React from 'react';

import Header from './sections/Header';
import Foundation from './sections/Foundation';
import Layout from './layouts/Layout';

function App() {
  

  return (
    <Layout theme="light-theme">
      <Header />
      <Foundation />
    </Layout>
  );
}

export default App;
