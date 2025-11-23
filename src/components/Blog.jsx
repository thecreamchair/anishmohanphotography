import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <div id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-serif font-bold text-nature-50 mb-6 text-center"
                >
                    Blog
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg text-nature-300 max-w-3xl mx-auto text-center"
                >
                    Stay tuned for updates, stories, and behind‑the‑scenes insights into my wildlife photography adventures.
                </motion.p>
            </div>
        </div>
    );
};

export default Blog;
