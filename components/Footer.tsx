import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-12 md:py-16 bg-black/80 backdrop-blur-xl border-t border-white/5 relative z-10 transition-colors duration-500 hover:bg-black/90">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-4 flex items-center gap-2">
                            Femur Studio
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            Crafting digital brilliance with precision and passion. We build the future of web and mobile interactions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="#home" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Home</Link></li>
                            <li><Link href="#projects" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Projects</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Services</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">App Development</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Connect</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <Mail className="w-5 h-5 mt-0.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                                <span>contact@femur.studio</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 mt-0.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                                <span>Bilaspur, CG, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Femur Studio. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-300"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-300"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-300"><Twitter className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
