import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-nature-50 mb-4">Get in Touch</h2>
                    <p className="text-nature-400">Interested in prints or collaborations? I'd love to hear from you.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-nature-800 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-brand-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-nature-50">Email</h3>
                                <p className="text-nature-400">hello@anishmohan.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-nature-800 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-brand-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-nature-50">Phone</h3>
                                <p className="text-nature-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-nature-800 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-brand-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-nature-50">Location</h3>
                                <p className="text-nature-400">Portland, Oregon</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-nature-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-nature-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-nature-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
