"use client";

import { motion } from "framer-motion";
import { CheckCircle, Terminal, Users, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                            Pourquoi travailler avec moi ?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Ingénieur passionné par la conception et le déploiement d'applications innovantes.
                            Fort d'une solide expérience chez des leaders comme <strong className="text-navy">Dassault Systèmes</strong> et <strong className="text-navy">Capgemini</strong>,
                            je supervise vos projets avec un souci constant de qualité, de sécurité et de conformité.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Expert en développement logiciel",
                                "Autonome & Proactif",
                                "Communication Transparente",
                                "Vision Stratégique"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span className="text-navy font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Grid Visuals */}
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-navy p-6 rounded-2xl text-white flex flex-col justify-between h-48"
                        >
                            <Terminal className="w-8 h-8 text-accent" />
                            <div>
                                <h4 className="font-bold text-lg">Technique</h4>
                                <p className="text-sm text-gray-300">Maîtrise des stacks modernes</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 p-6 rounded-2xl text-navy flex flex-col justify-between h-48"
                        >
                            <Users className="w-8 h-8 text-blue-500" />
                            <div>
                                <h4 className="font-bold text-lg">Humain</h4>
                                <p className="text-sm text-gray-600">Collaboration efficace</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 p-6 rounded-2xl text-navy flex flex-col justify-between h-48 col-span-2"
                        >
                            <div className="flex justify-between items-start">
                                <Cpu className="w-8 h-8 text-purple-500" />
                                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">100%</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Performance</h4>
                                <p className="text-sm text-gray-600">Optimisation et scalabilité garanties</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
