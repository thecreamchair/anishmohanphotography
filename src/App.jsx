import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default App;
