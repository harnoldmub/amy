"use client";

import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-navy text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tighter">Arnold M.Y.</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Ingénieur Développement & Chef de Projet.
                            Transformez votre vision en réalité numérique avec des solutions sur-mesure.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-accent" />
                                <a href="mailto:arnold@mubuanga.com">arnold@mubuanga.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-accent" />
                                <span>Lille & Paris</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Suivez-moi</h4>
                        <div className="flex space-x-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/arnold-mubuanga-yate-149b7b151" },
                                { icon: Github, href: "#" },
                                { icon: Twitter, href: "#" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 text-gray-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 Arnold Mubuanga Yate. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
