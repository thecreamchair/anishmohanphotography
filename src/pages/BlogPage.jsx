import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <div className="pt-56 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-serif font-bold text-nature-50 mb-12 text-center"
                >
                    Blog
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for blog posts */}
                    <div className="bg-nature-900/50 p-6 rounded-lg border border-nature-800">
                        <h3 className="text-xl font-bold text-nature-100 mb-2">Latest Adventures</h3>
                        <p className="text-nature-400">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
