
import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/misc_images/Anish Mohan.JPG';

const About = () => {
    return (
        <div id="profile" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={aboutImage}
                        alt="Photographer in nature"
                        className="rounded-lg shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-serif text-nature-50 mb-6">Behind the Lens</h2>
                    <p className="text-lg text-nature-300 mb-6 leading-relaxed">
                        Hello, I'm Anish. My journey into wildlife photography began with a simple curiosity about the birds in my backyard.
                        That curiosity quickly blossomed into a passionate pursuit of capturing the untold stories of the natural world.
                    </p>
                    <p className="text-lg text-nature-300 mb-6 leading-relaxed">
                        I believe that every photograph has the power to inspire conservation and appreciation for our planet's biodiversity.
                        Through my lens, I hope to bring you closer to the wild, showing you the intricate details and raw emotions of nature
                        that often go unnoticed.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="text-center p-4 bg-nature-900 rounded-lg">
                            <span className="block text-3xl font-bold text-nature-100">5+</span>
                            <span className="text-sm text-nature-400">Years Experience</span>
                        </div>
                        <div className="text-center p-4 bg-nature-900 rounded-lg">
                            <span className="block text-3xl font-bold text-nature-100">50+</span>
                            <span className="text-sm text-nature-400">Species Documented</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
