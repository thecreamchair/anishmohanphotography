import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => (
    <div className="pt-56 pb-20 px-4 bg-nature-950 min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-8xl font-serif text-brand-500 mb-4">404</h1>
            <h2 className="text-3xl font-serif text-nature-50 mb-4">Page Not Found</h2>
            <p className="text-nature-400 mb-8 max-w-md">
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <Link
                to="/"
                className="inline-block bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
                Back to Home
            </Link>
        </motion.div>
    </div>
);

export default NotFound;
