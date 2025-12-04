import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const query = '*[_type == "post"] | order(publishedAt desc)';
        client.fetch(query)
            .then((data) => {
                setPosts(data);
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
                    Journal
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            {post.mainImage && (
                                <img
                                    src={urlFor(post.mainImage).width(400).url()}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            )}
                            <h2 className="text-xl font-serif text-nature-50 mb-2">{post.title}</h2>
                            <p className="text-nature-400 text-sm mb-4">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                            <div className="text-nature-200 line-clamp-3">
                                {/* Simple body preview - assumes block content or string */}
                                {post.body && post.body[0]?.children[0]?.text}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
