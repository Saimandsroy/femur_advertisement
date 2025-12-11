import { ArrowRight, Sparkles, Megaphone, Share2, PieChart } from "lucide-react";
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-indigo-200">Your Growth Partner in Digital Marketing</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6 sm:mb-8 text-white drop-shadow-2xl">
                    AMPLIFY.<br />
                    YOUR.<br />
                    <span className="text-gradient">
                        BRAND.
                    </span>
                </h1>

                <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light tracking-wide drop-shadow-lg px-2 sm:px-0">
                    We handle all your advertising needs and social media management so you can focus on what you do best. From strategy to execution, we drive results.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Link href="https://cal.com/femurstudio/30min" target="_blank" rel="noopener noreferrer" className="relative p-[1px] rounded-full overflow-hidden group w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#6366f1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[1px] rounded-full border border-white/10 bg-black/40 backdrop-blur-md" />
                        <div className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-transparent rounded-full text-white font-medium tracking-wide">
                            Start Campaign
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Megaphone, label: "Ad Campaigns", desc: "Multi-Platform Advertising" },
                        { icon: Share2, label: "Social Media", desc: "Complete Management" },
                        { icon: PieChart, label: "Analytics", desc: "Performance Tracking" },
                    ].map((service, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl flex flex-col items-center hover:bg-white/5 transition-colors cursor-pointer group">
                            <service.icon className="w-8 h-8 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-semibold mb-1">{service.label}</h3>
                            <p className="text-slate-400 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
