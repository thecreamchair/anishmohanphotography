import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&w=800&q=80', category: 'Birds', title: 'Blue Jay' },
    { id: 2, src: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80', category: 'Birds', title: 'Parrot' },
    { id: 3, src: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?auto=format&fit=crop&w=800&q=80', category: 'Wildlife', title: 'Deer' },
    { id: 4, src: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Birds', title: 'Bee Eater' },
    { id: 5, src: 'https://images.unsplash.com/photo-1445820200644-69f87d946277?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Birds', title: 'Parrot' },
    { id: 6, src: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80', category: 'Birds', title: 'Hummingbird' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-nature-50 mb-4">Selected Works</h2>
                    <p className="text-nature-400 max-w-2xl mx-auto">A collection of moments from the wild.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer shadow-lg"
                            onClick={() => setSelectedImage(photo)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h3 className="text-xl font-serif">{photo.title}</h3>
                                    <p className="text-sm text-nature-200">{photo.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-brand-500 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
