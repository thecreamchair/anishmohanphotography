import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const Hero = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")', // Kingfisher
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight"
                >
                    Nature's <span className="text-brand-500">Canvas</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-nature-100 max-w-2xl mb-10 font-light tracking-wide"
                >
                    Capturing the fleeting moments of wildlife and the elegance of birds in their natural habitat.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#gallery"
                        className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 tracking-widest text-sm font-semibold uppercase inline-block"
                    >
                        View Gallery
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ChevronDown className="h-8 w-8 text-white/70" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
