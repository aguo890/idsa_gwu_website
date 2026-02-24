import React from 'react';
import { MOCK_RESOURCES } from '../data/mockResources_playbook';
import { BookOpen } from 'lucide-react';

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

const ThePlaybook: React.FC = () => (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <PageHeader title="The Playbook" subtitle="Resource Context & Knowledge" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_RESOURCES.map(res => (
                <div key={res.id} className="flex flex-col border border-gray-100 p-8 hover:border-gw-buff transition-luxury bg-white shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={16} className="text-gw-buff" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {res.type}
                        </span>
                    </div>
                    <h3 className="text-2xl font-display font-black text-gw-blue leading-tight mb-4">
                        {res.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light flex-grow leading-relaxed">
                        {res.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2 mb-8">
                        {res.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-bold uppercase tracking-widest text-gw-blue bg-gw-buff py-1 px-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a href={res.url} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gw-red hover:text-gw-blue transition-colors flex items-center gap-1 group">
                        Access Resource <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default ThePlaybook;
