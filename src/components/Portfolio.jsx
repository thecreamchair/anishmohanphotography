import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <div id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-serif font-bold text-nature-50 mb-6"
                >
                    Portfolio
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg text-nature-300 max-w-3xl mx-auto mb-8"
                >
                    A showcase of my wildlife photography projects and collaborations.
                </motion.p>
                <motion.a
                    href="/portfolio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="inline-block px-8 py-3 border border-nature-50 text-nature-50 hover:bg-nature-50 hover:text-nature-950 transition-colors duration-300 rounded-full"
                >
                    View All Projects
                </motion.a>
            </div>
        </div>
    );
};

export default Portfolio;
