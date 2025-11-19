"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["Tous", "Branding", "Web", "Communication", "UI/UX", "Événementiel"];

const projects = [
    {
        title: "Congo Na Paris",
        category: "Événementiel",
        image: "bg-gradient-to-br from-yellow-400 to-orange-500",
        description: "Identité visuelle et plateforme web pour le festival culturel.",
    },
    {
        title: "Sublimag",
        category: "Branding",
        image: "bg-gradient-to-br from-blue-400 to-indigo-500",
        description: "Refonte complète de l'image de marque et supports print.",
    },
    {
        title: "Salon Business Africa",
        category: "Web",
        image: "bg-gradient-to-br from-green-400 to-emerald-500",
        description: "Site vitrine institutionnel et système d'inscription.",
    },
    {
        title: "App Mobile Fintech",
        category: "UI/UX",
        image: "bg-gradient-to-br from-purple-400 to-pink-500",
        description: "Design d'interface pour une application bancaire innovante.",
    },
    {
        title: "Campagne Digitale",
        category: "Communication",
        image: "bg-gradient-to-br from-red-400 to-rose-500",
        description: "Stratégie social media et création de contenus viraux.",
    },
    {
        title: "E-shop Mode",
        category: "Web",
        image: "bg-gradient-to-br from-teal-400 to-cyan-500",
        description: "Boutique en ligne Shopify avec design sur-mesure.",
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredProjects = activeCategory === "Tous"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                        Nos dernières réalisations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Découvrez quelques projets qui illustrent notre approche créative et stratégique.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-accent text-white border-accent shadow-lg scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50">
                                    {/* Image Placeholder */}
                                    <div className={`h-72 w-full ${project.image} transition-transform duration-700 group-hover:scale-105`} />

                                    {/* Overlay Content (Visible on Hover) */}
                                    <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-2xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-6 max-w-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            {project.description}
                                        </p>
                                        <button className="inline-flex items-center text-white font-semibold border-b border-accent pb-1 hover:text-accent transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                            Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>

                                {/* Title below card (Optional, matching reference style often has clean cards but maybe title below? The reference image showed cards with content inside or below. Let's keep it clean inside hover for now as per previous, but maybe add title below if "clean large images" implies less text overlay initially. Actually the reference image shows clean cards. I will stick to hover overlay for details to keep it clean.) */}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
