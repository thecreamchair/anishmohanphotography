import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-nature-900 text-nature-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-serif font-bold text-nature-50 tracking-wider">
                            ANISH<span className="text-brand-500">MOHAN</span>
                        </span>
                        <p className="mt-2 text-sm text-nature-400">Capturing the untamed beauty of nature.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-nature-50 transition-colors">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-nature-50 transition-colors">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-nature-50 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-nature-800 text-center text-sm text-nature-500">
                    &copy; {new Date().getFullYear()} Anish Mohan Photography. All rights reserved.
                </div>            </div>
        </footer>
    );
};

export default Footer;
