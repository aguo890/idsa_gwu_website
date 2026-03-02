import React from 'react';
import { Layers, Users, Moon, Video, Clapperboard, Zap } from 'lucide-react';

const features = [
    {
        id: 'team-connect',
        title: 'Team Connect',
        description: 'Seamlessly integrate your CAD workflows with direct peer-to-peer review systems.',
        icon: <Users size={24} />,
        category: 'Workflow'
    },
    {
        id: 'unified-profiles',
        title: 'Unified Profiles',
        description: 'One centralized portfolio merging Corcoran arts with SEAS engineering projects.',
        icon: <Layers size={24} />,
        category: 'Workflow'
    },
    {
        id: 'dark-mode',
        title: 'Dark Mode Focus',
        description: 'Premium Liquid Glass aesthetic designed for late-night studio endurance.',
        icon: <Moon size={24} />,
        category: 'Workflow'
    },
    {
        id: 'dynamic-snapshots',
        title: 'Dynamic Snapshots',
        description: 'Capture and share real-time progress from the Makerspace directly to the feed.',
        icon: <Video size={24} />,
        category: 'Highlights'
    },
    {
        id: 'highlight-reel',
        title: 'Highlight Reel',
        description: 'Curated gallery of top-tier industrial design projects and award winners.',
        icon: <Clapperboard size={24} />,
        category: 'Highlights'
    },
    {
        id: 'rapid-prototyping',
        title: 'Rapid Prototyping',
        description: 'Instant access to 3D printer queues and laser cutting schedules.',
        icon: <Zap size={24} />,
        category: 'Workflow'
    }
];

export const FeatureGrid: React.FC = () => {
    return (
        <section className="w-full">
            <div className="flex items-center gap-4 mb-10">
                <h3 className="text-xs font-display font-black uppercase tracking-[0.3em] text-black">
                    Unlock Seamless Workflow
                </h3>
                <div className="h-px flex-grow bg-gray-100 border-4 border-black" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {features.map(feature => (
                    <div key={feature.id} className="brutalist-panel p-8 rounded-2xl flex flex-col gap-6 hover:-translate-y-2 hover:bg-gray-100 border-4 border-black transition-all duration-500 group">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 border-4 border-black border border-4 border-black flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                {feature.icon}
                            </div>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-black bg-gray-100 border-4 border-black px-2 py-1 rounded">
                                {feature.category}
                            </span>
                        </div>
                        <div>
                            <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-black transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-sm text-black font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
