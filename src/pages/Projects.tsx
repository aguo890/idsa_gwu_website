import React from 'react';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { SMAShowcase } from '../components/portfolio/SMAShowcase';
import { MOCK_PROJECTS } from '../data/mockProjects';

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

const Projects: React.FC = () => (
    <div className="w-full">
        <PageHeader title="Projects" subtitle="Academic Context & Portfolio" />
        <SMAShowcase projects={MOCK_PROJECTS} />
        <div className="mb-12 glass-panel p-8 rounded-3xl mt-12">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-display font-black uppercase tracking-[0.3em] text-white">
                    Selected Projects
                </h3>
                <div className="h-px flex-grow bg-white/10" />
            </div>
            <ProjectGrid projects={MOCK_PROJECTS.filter(p => !p.isSMASubmission)} />
        </div>
    </div>
);

export default Projects;
