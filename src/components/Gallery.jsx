import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { client, urlFor } from '../client';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "selectedWork"][0]';
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

    if (loading) return null; // Or a loading spinner
    if (photos.length < 6) return null; // Don't render if not enough photos

    return (
        <div id="gallery" className="py-40 px-6 sm:px-6 lg:px-20 bg-nature-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-nature-50 mb-4">Selected Works</h2>
                    <p className="text-nature-400 max-w-2xl mx-auto">A collection of moments from the wild.</p>
                </motion.div>

                <div className="grid grid-cols-4 gap-4 auto-rows-[200px] max-w-4xl mx-auto">
                    {/* Top of A */}
                    <motion.div
                        key={photos[4]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-start-2 col-span-2 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                        onClick={() => setSelectedImage(photos[4])}
                    >
                        <img src={urlFor(photos[4]).width(800).url()} alt={photos[4].alt || photos[4].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Middle Left */}
                    <motion.div
                        key={photos[1]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-start-1 col-span-2 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg mt-4"
                        onClick={() => setSelectedImage(photos[1])}
                    >
                        <img src={urlFor(photos[1]).width(800).url()} alt={photos[1].alt || photos[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Middle Right */}
                    <motion.div
                        key={photos[2]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-start-3 col-span-2 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg mt-4"
                        onClick={() => setSelectedImage(photos[2])}
                    >
                        <img src={urlFor(photos[2]).width(800).url()} alt={photos[2].alt || photos[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Bottom Left Leg */}
                    <motion.div
                        key={photos[3]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-start-1 col-span-1 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                        onClick={() => setSelectedImage(photos[3])}
                    >
                        <img src={urlFor(photos[3]).width(800).url()} alt={photos[3].alt || photos[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Bridge (Middle) */}
                    <motion.div
                        key={photos[0]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-start-2 col-span-2 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                        onClick={() => setSelectedImage(photos[0])}
                    >
                        <img src={urlFor(photos[0]).width(800).url()} alt={photos[0].alt || photos[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Bottom Right Leg */}
                    <motion.div
                        key={photos[5]._key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="col-start-4 col-span-1 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                        onClick={() => setSelectedImage(photos[5])}
                    >
                        <img src={urlFor(photos[5]).width(800).url()} alt={photos[5].alt || photos[5].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
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
                            src={urlFor(selectedImage).width(1200).url()}
                            alt={selectedImage.alt || selectedImage.title}
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
