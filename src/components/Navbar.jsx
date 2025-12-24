import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e, path) => {
        e.preventDefault();
        setIsOpen(false);

        if (path.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(path);
                    if (element) {
                        const navHeight = 80;
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                            top: elementPosition - navHeight,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            } else {
                // Same-page navigation (Home -> Section)
                // Wait for mobile menu to close (300ms transition)
                setTimeout(() => {
                    const element = document.querySelector(path);
                    if (element) {
                        const navHeight = 80;
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                            top: elementPosition - navHeight,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            }
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    };

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Profile', path: '#profile' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '#contact' },
    ];

    const isHome = location.pathname === '/';
    const textColor = scrolled || !isHome ? 'text-nature-100' : 'text-white';
    const buttonColor = scrolled || !isHome ? 'text-nature-100' : 'text-white';

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-0 shadow-sm' : 'bg-transparent py-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <a href="/" onClick={(e) => handleNavigation(e, '#home')} className="flex items-center justify-center group mb-[-1rem] mt-[-1.5rem]">
                        <img src={logo} alt="Logo" className="h-40 w-auto object-contain" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`${import.meta.env.BASE_URL}${link.path.startsWith('/') ? link.path.slice(1) : link.path}`}
                                onClick={(e) => handleNavigation(e, link.path)}
                                className={`text-sm font-medium tracking-widest hover:text-brand-500 transition-colors cursor-pointer ${textColor}`}
                            >
                                {link.name.toUpperCase()}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden absolute right-4 top-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`hover:text-brand-500 transition-colors ${buttonColor}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-nature-900/95 backdrop-blur-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`${import.meta.env.BASE_URL}${link.path.startsWith('/') ? link.path.slice(1) : link.path}`}
                                    className="text-lg font-medium tracking-widest text-nature-50 hover:text-brand-500 transition-colors cursor-pointer"
                                    onClick={(e) => handleNavigation(e, link.path)}
                                >
                                    {link.name.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
