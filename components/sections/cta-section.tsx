import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto glass-card p-12 sm:p-20 rounded-[2rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500" />

                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">Ready to <span className="text-gradient">Explode</span> Your Sales?</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                    Stop wasting budget on ineffective ads. Let's build a campaign that actually converts.
                </p>

                <Link href="https://cal.com/femurstudio/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                    Get Your Free Audit
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
