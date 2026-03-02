import React from 'react';
import { TeamDirectory } from '../components/team/TeamDirectory';

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

const Leadership: React.FC = () => (
    <div className="w-full">
        <PageHeader title="Leadership" subtitle="The Team" />
        <TeamDirectory />
    </div>
);

export default Leadership;
