import { Megaphone, Target, BarChart, Rocket, Mail, Globe } from "lucide-react";

export function ServicesSection() {
    const services = [
        { title: "Social Media Ads", desc: "High-converting campaigns on Facebook, Instagram & TikTok.", icon: Megaphone },
        { title: "Google Advertising", desc: "Capture intent with precision Search and Display ads.", icon: Target },
        { title: "Content Marketing", desc: "Engaging content that builds brand authority and trust.", icon: Mail },
        { title: "Analytics & ROI", desc: "Data-driven optimization to maximize your ad spend.", icon: BarChart },
        { title: "Brand Strategy", desc: "Positioning your brand for long-term growth and impact.", icon: Globe },
        { title: "Growth Hacking", desc: "Rapid experimentation to identify the most efficient growth channels.", icon: Rocket },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Our Services</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive digital marketing solutions custom-tailored to your business goals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                <service.icon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
