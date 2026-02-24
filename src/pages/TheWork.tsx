import React from 'react';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { SMAShowcase } from '../components/portfolio/SMAShowcase';
import { MOCK_PROJECTS } from '../data/mockProjects';

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

const TheWork: React.FC = () => (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <PageHeader title="The Work" subtitle="Academic Context & Portfolio" />
        <SMAShowcase projects={MOCK_PROJECTS} />
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-display font-black uppercase tracking-[0.3em] text-gw-blue">
                    Selected Projects
                </h3>
                <div className="h-px flex-grow bg-gray-100" />
            </div>
            <ProjectGrid projects={MOCK_PROJECTS.filter(p => !p.isSMASubmission)} />
        </div>
    </div>
);

export default TheWork;
