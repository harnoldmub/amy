"use client";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contactez-moi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Un projet ? Une question ? N'hésitez pas à me laisser un message.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-navy text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Je suis disponible pour discuter de vos besoins en développement web, transformation numérique ou stratégie de communication.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Email</p>
                                        <a href="mailto:arnold@mubuanga.com" className="text-lg font-medium hover:text-accent transition-colors">
                                            arnold@mubuanga.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Localisation</p>
                                        <p className="text-lg font-medium">Lille & Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-gray-400 mb-4">Retrouvez-moi sur</p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/arnold-mubuanga-yate-149b7b151" },
                                    { icon: Github, href: "#" },
                                    { icon: Twitter, href: "#" },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-white"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-semibold text-navy">Nom complet</label>
                                <InputText id="name" placeholder="Votre nom" className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-accent" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold text-navy">Email</label>
                                <InputText id="email" type="email" placeholder="votre@email.com" className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-accent" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-semibold text-navy">Message</label>
                                <InputTextarea id="message" rows={5} placeholder="Décrivez votre projet..." className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:ring-accent" />
                            </div>

                            <Button label="Envoyer le message" className="w-full !bg-accent !border-accent hover:!bg-accent/90 !py-3 !font-bold !text-lg" />
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
