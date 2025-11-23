import Layout from './components/Layout';
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
