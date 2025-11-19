"use client";

import { Layout, RefreshCw, Code, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Création de Site Internet",
        description: "Conception de sites modernes, performants et adaptés aux besoins utilisateurs.",
        icon: Layout,
        color: "bg-blue-500",
    },
    {
        title: "Transformation Numérique",
        description: "Digitalisation de vos processus métiers et accompagnement au changement.",
        icon: RefreshCw,
        color: "bg-accent",
    },
    {
        title: "Développement Sur-Mesure",
        description: "Applications web et mobiles complexes, respectant les standards de sécurité et qualité.",
        icon: Code,
        color: "bg-purple-500",
    },
    {
        title: "Conseil & Communication",
        description: "Stratégie digitale et coordination de projets techniques.",
        icon: MessageSquare,
        color: "bg-emerald-500",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Mes Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Des solutions adaptées à vos besoins pour propulser votre activité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
