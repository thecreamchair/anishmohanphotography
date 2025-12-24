import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // '', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf1Ytiun6dpMLa4yf6XJJIdc51s6lkWJXW2oA_tkJwMfjf8Dw/formResponse";

        const data = new FormData();
        data.append('entry.482068227', formData.name);
        data.append('entry.1476203373', formData.email);
        data.append('entry.1954781396', formData.message);

        try {
            await fetch(FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: data
            });
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
        } catch (error) {
            console.error("Form submission error", error);
            setStatus('error');
        }
    };

    return (
        <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-nature-50 mb-4">Get in Touch</h2>
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
                                <p className="text-nature-400">anish.mohan22@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-nature-800 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-brand-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-nature-50">Phone</h3>
                                <p className="text-nature-400">+91 8861138678</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-nature-800 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-brand-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-nature-50">Location</h3>
                                <p className="text-nature-400">Bangalore, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-nature-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50 outline-none transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-nature-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-nature-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-nature-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-nature-900 text-nature-50 outline-none transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full font-semibold py-3 rounded-lg transition-all flex justify-center items-center ${status === 'submitting'
                                ? 'bg-nature-700 cursor-not-allowed text-nature-300'
                                : 'bg-brand-600 hover:bg-brand-500 text-white'
                                }`}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-center text-sm bg-green-400/10 py-2 rounded-lg"
                            >
                                Message sent successfully! I'll get back to you soon.
                            </motion.p>
                        )}

                        {status === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-center text-sm bg-red-400/10 py-2 rounded-lg"
                            >
                                Something went wrong. Please try emailing me directly.
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
