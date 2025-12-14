import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { client, urlFor } from '../client';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Expand the references to get the actual portfolio items
        const query = '*[_type == "selectedWork"][0]{..., images[]->}';
        client.fetch(query)
            .then((data) => {
                if (data && data.images) {
                    setPhotos(data.images);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;
    if (!photos || photos.length === 0) return null;

    return (
        <div id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-nature-50 mb-4">Selected Works</h2>
                    <p className="text-nature-400 max-w-2xl mx-auto">A collection of moments from the wild.</p>
                </motion.div>

                {/* Simple 3-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg aspect-[4/3]"
                            onClick={() => setSelectedImage(photo)}
                        >
                            {photo.image && (
                                <img
                                    src={urlFor(photo.image).width(800).height(600).url()}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white text-xl font-serif">{photo.title}</h3>
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-brand-500 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <motion.div
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedImage.image && (
                                <img
                                    src={urlFor(selectedImage.image).width(1200).url()}
                                    alt={selectedImage.title}
                                    className="max-h-[80vh] max-w-full rounded-lg shadow-2xl object-contain"
                                />
                            )}
                            <div className="mt-4 text-center">
                                <h2 className="text-white text-2xl font-serif mb-2">{selectedImage.title}</h2>
                                {selectedImage.caption && (
                                    <p className="text-nature-200 max-w-2xl mx-auto">{selectedImage.caption}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
