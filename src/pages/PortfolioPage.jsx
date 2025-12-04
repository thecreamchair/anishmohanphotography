import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetching 'project' type. If user hasn't created it, this will return empty.
        // Alternatively, they can use 'post' with a category.
        const query = '*[_type == "project"] | order(publishedAt desc)';
        client.fetch(query)
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="pt-56 px-4 text-center text-nature-50">Loading...</div>;
    if (error) return <div className="pt-56 px-4 text-center text-red-600">Error: {error}. Please check your Sanity CORS settings.</div>;

    return (
        <div className="pt-56 px-4 sm:px-6 lg:px-8 bg-nature-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif text-nature-50 mb-12 text-center"
                >
                    Portfolio
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group relative overflow-hidden rounded-lg shadow-sm"
                        >
                            {project.mainImage && (
                                <img
                                    src={urlFor(project.mainImage).width(600).url()}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h2 className="text-white text-xl font-serif">{project.title}</h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
