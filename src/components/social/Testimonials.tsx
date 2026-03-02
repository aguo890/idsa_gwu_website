import React from 'react';
import { ArrowRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The IDSA chapter has single-handedly bridged the gap between our engineering rigor and the spontaneous creativity required for true industrial design.",
        author: "Alex Johnson",
        role: "Senior Industrial Designer",
        company: "SAINT"
    },
    {
        id: 2,
        quote: "The new facility and the talent coming out of GW is phenomenal. They are building products that don't just work, but feel right.",
        author: "Nils Olsen",
        role: "Head of Product",
        company: "EMY Innovation"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map(t => (
                    <div key={t.id} className="brutalist-panel p-8 rounded-2xl relative overflow-hidden group hover:bg-gray-100 border-4 border-black transition-transform duration-200 flex flex-col justify-between">
                        {/* Huge translucent quotation mark */}
                        <div className="absolute -top-6 -left-4 text-[12rem] text-black font-serif leading-none pointer-events-none select-none group-hover:text-black transition-colors duration-500">
                            "
                        </div>

                        <p className="text-black font-light leading-relaxed relative z-10 text-sm italic mb-8">
                            "{t.quote}"
                        </p>

                        <div className="relative z-10 mt-auto">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-4 border-black mb-3 shadow-md" />
                            <h5 className="text-sm font-bold text-black tracking-wide">{t.author}</h5>
                            <span className="text-[10px] text-black uppercase tracking-widest block mt-1">
                                {t.role} @ {t.company}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="brutalist-panel p-8 rounded-2xl flex flex-col justify-between hover:border-4 border-black transition-transform duration-200 group bg-gradient-to-b from-white/5 to-transparent">
                <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-black mb-2 block">
                        Insights & Updates
                    </span>
                    <h3 className="text-3xl font-display font-black text-black leading-tight mb-4">
                        Latest from the Blog
                    </h3>
                    <p className="text-sm text-black font-light mb-8">
                        Dive deep into our latest process teardowns, alumni interviews, and upcoming workshops.
                    </p>
                </div>

                <button className="brutalist-button w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                    Read Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};
