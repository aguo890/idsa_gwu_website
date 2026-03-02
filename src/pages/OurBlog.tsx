import React from 'react';
import { BookOpen } from 'lucide-react';

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
                <div key={resource.id} className="brutalist-panel p-8 rounded-2xl group hover:border-4 border-black transition-transform duration-200 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 border-4 border-black flex items-center justify-center mb-6 group-hover:bg-gray-100 border-4 border-black transition-colors">
                        <BookOpen size={20} className="text-black group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gw-buff mb-2 block">
                        {resource.type} • {resource.category}
                    </span>
                    <h3 className="text-2xl font-display font-black text-black group-hover:text-black transition-colors mb-3">
                        {resource.title}
                    </h3>
                    <p className="text-sm text-black font-light leading-relaxed">
                        {resource.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

export default OurBlog;
