import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';

const Home = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;
