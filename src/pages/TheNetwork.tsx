import React from 'react';
import { MOCK_EVENTS } from '../data/mockEvents';
import { Calendar, ExternalLink, Users } from 'lucide-react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <header className="mb-12">
        <span className="text-gw-red font-display font-bold uppercase tracking-[0.2em] text-xs">
            {subtitle}
        </span>
        <h2 className="text-6xl font-display font-black text-gw-blue mt-2">
            {title}
        </h2>
    </header>
);

const TheNetwork: React.FC = () => (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <PageHeader title="The Network" subtitle="Professional Context & Community" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                {MOCK_EVENTS.map(event => (
                    <div key={event.id} className="group border border-gray-100 p-8 hover:border-gw-blue transition-luxury shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-gw-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest italic">
                                {event.eventType}
                            </span>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={14} />
                                <span className="text-xs font-bold font-display">
                                    {new Date(event.dateTimestamp).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-display font-black text-gw-blue group-hover:text-gw-light-blue transition-colors">
                            {event.title}
                        </h3>
                        <p className="mt-4 text-gray-500 font-light leading-relaxed">
                            {event.description}
                        </p>
                        {event.guestProfessionals.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-4">
                                <div className="text-[10px] uppercase font-black text-gw-blue">Guest Pros:</div>
                                <div className="flex overflow-hidden">
                                    {event.guestProfessionals.map((pro) => (
                                        <div key={pro.id} className={`w-8 h-8 rounded-full bg-gw-buff flex items-center justify-center border-2 border-white -ml-2 first:ml-0`} title={`${pro.name} (${pro.company})`}>
                                            <Users size={12} className="text-gw-blue" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <a href={event.registrationURL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-gw-red text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gw-blue transition-luxury shadow-lg shadow-gw-red/10">
                            Register <ExternalLink size={10} />
                        </a>
                    </div>
                ))}
            </div>
            <aside className="bg-gray-50 p-8 h-fit border border-gray-100">
                <h4 className="text-xs font-display font-black uppercase tracking-widest text-gw-blue border-b border-gw-blue/10 pb-4 mb-6">
                    Professional Pipeline
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light mb-8">
                    The GWU IDSA chapter connects students directly to the national job board and top-tier design firms.
                </p>
                <button className="w-full py-4 border-2 border-gw-blue text-gw-blue font-bold text-[10px] uppercase tracking-widest hover:bg-gw-blue hover:text-white transition-luxury mb-4">
                    View Coroflot Job Board
                </button>
                <button className="w-full py-4 bg-gw-blue text-white font-bold text-[10px] uppercase tracking-widest hover:bg-gw-red transition-luxury">
                    Mock Interview Sign-up
                </button>
            </aside>
        </div>
    </div>
);

export default TheNetwork;
