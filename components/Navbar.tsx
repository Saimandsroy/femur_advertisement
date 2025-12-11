"use client"

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <img
                        src="/femur-logo.jpg"
                        alt="Femur Studio"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain border border-white/10"
                    />
                    <span className="font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-slate-300 transition-colors font-sans">Femur Studio</span>
                </Link>
            </div>
        </nav>
    );
}
