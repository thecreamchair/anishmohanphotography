import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-nature-950">
            <Navbar />
            <main className="flex-grow pt-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
