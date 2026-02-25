import React from 'react';
import { Users, BookOpen } from 'lucide-react';

const partners = ['L\'Oréal', 'SAINT', 'EMY'];

export const Hero: React.FC = () => {
    return (
        <section className="w-full flex flex-col gap-12">
            <div className="glass-panel p-12 md:p-16 rounded-3xl relative overflow-hidden group">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gw-blue/20 rounded-full blur-3xl pointer-events-none group-hover:bg-gw-blue/30 transition-luxury" />

                <h1 className="text-4xl md:text-5xl xl:text-7xl font-display font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl mb-8 relative z-10 uppercase">
                    Innovation <br />
                    Creativity <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic leading-[0.85]">
                        Human-Centered<br />Solutions.
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl relative z-10 italic">
                    "Real-world experience through projects, internships, and competitions"
                </p>
                <div className="flex flex-wrap gap-4 mt-8 relative z-10">
                    <button className="glass-button px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-xl flex items-center gap-2 hover:scale-105">
                        <Users size={16} /> 20+ Active Members
                    </button>
                    <button className="glass-button px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-xl flex items-center gap-2 hover:scale-105">
                        <BookOpen size={16} /> 5+ GWU Professors
                    </button>
                </div>
            </div>

            {/* Partnership Track */}
            <div className="flex flex-col gap-4">
                <span className="text-white/50 text-[10px] uppercase font-black tracking-widest pl-4">In Partnership With</span>
                <div className="flex flex-wrap gap-4">
                    {partners.map(partner => (
                        <div key={partner} className="glass-panel px-8 py-6 rounded-2xl flex-grow flex items-center justify-center min-w-[150px] hover:bg-white/10 transition-luxury">
                            <span className="text-white/80 font-display font-black tracking-widest text-xl">{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
