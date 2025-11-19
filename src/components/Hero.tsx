"use client";

import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 bg-navy overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute top-[20%] left-[10%] w-[20%] h-[20%] bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
                                Disponible pour nouveaux projets
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Transformez votre vision en <span className="text-accent">réalité numérique</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Je suis <strong className="text-white">Arnold Mubuanga Yate</strong>, Ingénieur Développement & Chef de Projet.
                            J'accompagne les structures dans leur digitalisation, la création de sites web performants et leur stratégie de communication.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="mailto:arnold@mubuanga.com" className="w-full sm:w-auto">
                                <Button
                                    label="Discuter de mon projet"
                                    icon={<ArrowRight className="w-5 h-5 ml-2" />}
                                    className="!bg-accent !border-accent hover:!bg-accent/90 !px-8 !py-3 !text-lg !font-semibold !rounded-full w-full flex justify-center"
                                />
                            </a>
                            <Button
                                label="Voir mon CV"
                                icon={<FileText className="w-5 h-5 ml-2" />}
                                className="!bg-white/10 !border-white/20 !text-white hover:!bg-white/20 !px-8 !py-3 !text-lg !font-semibold !rounded-full w-full sm:w-auto flex justify-center backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mx-auto lg:ml-auto"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                            {/* Decorator Circle */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse" />

                            {/* Image Profile */}
                            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-slate-800 flex items-center justify-center group shadow-2xl">
                                <img
                                    src="/profile.jpg"
                                    alt="Arnold Mubuanga Yate"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Badge 1 */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-10 -left-4 md:top-20 md:-left-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <span className="font-bold">5+</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Années d'expérience</p>
                                    <p className="text-navy font-bold text-sm">Expert Développement</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-10 -right-4 md:bottom-20 md:-right-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                    <span className="font-bold">10+</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Projets Réussis</p>
                                    <p className="text-navy font-bold text-sm">Satisfaction Client</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
