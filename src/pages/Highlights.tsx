import React from 'react';
import { LabDashboard } from '../components/lab/LabDashboard';
import { useLabStatus } from '../hooks/useLabStatus';
import { Loader2 } from 'lucide-react';

const Highlights: React.FC = () => {
    const { data: resources, isLoading, error } = useLabStatus();

    return (
        <div className="w-full">
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 glass-panel p-8 rounded-3xl">
                <div>
                    <span className="text-white/60 font-display font-bold uppercase tracking-[0.2em] text-xs">
                        Physical Context & Makerspace
                    </span>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white mt-2 drop-shadow-lg">
                        Highlights
                    </h2>
                </div>
                <div className="bg-white/5 p-6 border-l-4 border-white/20 max-w-md backdrop-blur-sm rounded-r-xl shadow-lg">
                    <p className="text-sm text-white/80 font-medium italic">
                        "Innovation for Social Impact" — Located in Tompkins Hall M06 at the intersection of H and 23rd Streets NW.
                    </p>
                </div>
            </header>

            {isLoading ? (
                <div className="h-64 flex flex-col items-center justify-center gap-4 text-white/40">
                    <Loader2 className="animate-spin" size={32} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Synchronizing Lab State...</span>
                </div>
            ) : error ? (
                <div className="p-8 glass-panel border-red-500/20 bg-red-500/10 text-red-200 text-center rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest">Failed to synchronize lab data.</span>
                </div>
            ) : (
                <LabDashboard resources={resources || []} />
            )}
        </div>
    );
};

export default Highlights;
