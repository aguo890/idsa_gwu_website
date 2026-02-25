import React from 'react';
import { BookOpen } from 'lucide-react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <header className="mb-12">
        <span className="text-white/60 font-display font-bold uppercase tracking-[0.2em] text-xs">
            {subtitle}
        </span>
        <h2 className="text-6xl md:text-8xl font-display font-black text-white mt-2 drop-shadow-lg">
            {title}
        </h2>
    </header>
);

const MOCK_RESOURCES = [
    {
        id: '1',
        title: 'Industrial Design Handbook 2025',
        type: 'PDF Guide',
        description: 'Comprehensive guide to standard practices, lab safety, and recommended tools.',
        category: 'Essentials'
    },
    {
        id: '2',
        title: 'Portfolio Review Guidelines',
        type: 'Presentation',
        description: 'What industry professionals look for in a junior designer\'s portfolio.',
        category: 'Career'
    },
    {
        id: '3',
        title: '3D Printing Protocols',
        type: 'Documentation',
        description: 'Step-by-step procedures for operating the lab\'s Prusa and Formlabs printers.',
        category: 'Makerspace'
    }
];

const OurBlog: React.FC = () => (
    <div className="w-full">
        <PageHeader title="Our Blog" subtitle="Resources & Insights" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_RESOURCES.map(resource => (
                <div key={resource.id} className="glass-panel p-8 rounded-2xl group hover:border-white/30 transition-luxury cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                        <BookOpen size={20} className="text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gw-buff mb-2 block">
                        {resource.type} • {resource.category}
                    </span>
                    <h3 className="text-2xl font-display font-black text-white group-hover:text-white/90 transition-colors mb-3">
                        {resource.title}
                    </h3>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                        {resource.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

export default OurBlog;
