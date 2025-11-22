import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
