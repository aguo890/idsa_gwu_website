import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const EventFeature: React.FC = () => {
    return (
        <section className="w-full">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-gw-buff/30 shadow-[0_0_30px_rgba(228,207,159,0.15)] relative overflow-hidden group hover:shadow-[0_0_40px_rgba(228,207,159,0.25)] transition-luxury">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gw-buff/5 to-transparent pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                    <div className="space-y-6 flex-grow">
                        <span className="inline-block bg-gw-buff/20 text-gw-buff backdrop-blur-md border border-gw-buff/30 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                            Marquee Event
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                            L'Oréal USA X IDSA | GW
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gw-buff/90 font-display font-bold">
                            Recruiting Event & Brandstorm 2026
                        </h3>

                        <div className="flex flex-col gap-3 mt-6">
                            <div className="flex items-center gap-3 text-white/70">
                                <Calendar size={18} className="text-white/50" />
                                <span className="text-sm font-medium tracking-wide">November 17th, 1:00 PM - 4:00 PM</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/70">
                                <MapPin size={18} className="text-white/50" />
                                <span className="text-sm font-medium tracking-wide">GWU University Center</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end md:justify-end">
                        <button className="glass-button w-full md:w-auto px-10 py-5 font-black uppercase tracking-[0.2em] text-sm rounded-xl flex items-center justify-center gap-3 hover:scale-105 hover:border-gw-buff/50 hover:text-gw-buff transition-all duration-300">
                            Register Now <ExternalLink size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
