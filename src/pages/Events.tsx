import React from 'react';
import { MOCK_EVENTS } from '../data/mockEvents';
import { Calendar, ExternalLink, Users } from 'lucide-react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <header className="mb-12">
        <span className="text-black font-display font-bold uppercase tracking-[0.2em] text-xs">
            {subtitle}
        </span>
        <h2 className="text-6xl md:text-8xl font-display font-black text-black mt-2 drop-shadow-brutal-sm">
            {title}
        </h2>
    </header>
);

const Events: React.FC = () => (
    <div className="w-full">
        <PageHeader title="Events" subtitle="Professional Context & Community" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                {MOCK_EVENTS.map(event => (
                    <div key={event.id} className="group brutalist-panel p-8 transition-transform duration-200 hover:border-4 border-black rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-gray-100 border-4 border-black text-black backdrop-blur-md border border-4 border-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest italic rounded-full">
                                {event.eventType}
                            </span>
                            <div className="flex items-center gap-2 text-black">
                                <Calendar size={14} />
                                <span className="text-xs font-bold font-display">
                                    {new Date(event.dateTimestamp).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-display font-black text-black group-hover:text-black transition-colors">
                            {event.title}
                        </h3>
                        <p className="mt-4 text-black font-light leading-relaxed">
                            {event.description}
                        </p>
                        {event.guestProfessionals.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-4 border-black flex items-center gap-4">
                                <div className="text-[10px] uppercase font-black text-black">Guest Pros:</div>
                                <div className="flex overflow-hidden">
                                    {event.guestProfessionals.map((pro) => (
                                        <div key={pro.id} className={`w-8 h-8 rounded-full bg-gray-100 border-4 border-black flex items-center justify-center border-2 border-4 border-black -ml-2 first:ml-0 backdrop-blur-sm shadow-sm`} title={`${pro.name} (${pro.company})`}>
                                            <Users size={12} className="text-black" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <a href={event.registrationURL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 brutalist-button px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-transform duration-200">
                            Register <ExternalLink size={10} />
                        </a>
                    </div>
                ))}
            </div>
            <aside className="brutalist-panel p-8 h-fit rounded-3xl sticky top-32">
                <h4 className="text-xs font-display font-black uppercase tracking-widest text-black border-b border-4 border-black pb-4 mb-6">
                    Professional Pipeline
                </h4>
                <p className="text-sm text-black leading-relaxed font-light mb-8">
                    The GWU IDSA chapter connects students directly to the national job board and top-tier design firms.
                </p>
                <button className="w-full py-4 brutalist-button font-bold text-[10px] uppercase tracking-widest rounded-xl mb-4">
                    View Coroflot Job Board
                </button>
                <button className="w-full py-4 brutalist-button font-bold text-[10px] uppercase tracking-widest rounded-xl">
                    Mock Interview Sign-up
                </button>
            </aside>
        </div>
    </div>
);

export default Events;
