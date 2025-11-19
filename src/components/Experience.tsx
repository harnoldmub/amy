"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Software Engineering Specialist",
        company: "Dassault Systèmes",
        period: "2021 - Présent",
        description: "Conception de solutions innovantes, maintenance 3DExperience.",
    },
    {
        role: "Consultant & Engineer",
        company: "Capgemini",
        period: "2021",
        description: "Plateforme pour Decathlon.",
    },
    {
        role: "Lead Développeur",
        company: "Hewani",
        period: "2019 - 2021",
        description: "Freelance, transition numérique d'associations.",
    },
    {
        role: "Ingénieur Front-End",
        company: "Dassault Systèmes",
        period: "2018 - 2020",
        description: "Développement d'interfaces utilisateurs complexes.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Mon Parcours</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une expertise forgée au sein de grandes entreprises et de projets ambitieux.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10" />

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2">
                                    <div className={`bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                        }`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Briefcase className="w-4 h-4 text-accent" />
                                            <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-1">{exp.role}</h3>
                                        <h4 className="text-md font-medium text-gray-500 mb-3">{exp.company}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
