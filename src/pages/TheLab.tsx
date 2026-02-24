import React from 'react';
import { LabDashboard } from '../components/lab/LabDashboard';
import { useLabStatus } from '../hooks/useLabStatus';
import { Loader2 } from 'lucide-react';

const TheLab: React.FC = () => {
    const { data: resources, isLoading, error } = useLabStatus();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <span className="text-gw-red font-display font-bold uppercase tracking-[0.2em] text-xs">
                        Physical Context & Makerspace
                    </span>
                    <h2 className="text-6xl font-display font-black text-gw-blue mt-2">
                        The Lab
                    </h2>
                </div>
                <div className="bg-gw-blue/5 p-6 border-l-4 border-gw-blue max-w-md">
                    <p className="text-sm text-gw-blue/80 font-medium italic">
                        "Innovation for Social Impact" — Located in Tompkins Hall M06 at the intersection of H and 23rd Streets NW.
                    </p>
                </div>
            </header>

            {isLoading ? (
                <div className="h-64 flex flex-col items-center justify-center gap-4 text-gw-blue/40">
                    <Loader2 className="animate-spin" size={32} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Synchronizing Lab State...</span>
                </div>
            ) : error ? (
                <div className="p-8 border-2 border-gw-red/20 bg-gw-red/5 text-gw-red text-center">
                    <span className="text-xs font-bold uppercase tracking-widest">Failed to synchronize lab data.</span>
                </div>
            ) : (
                <LabDashboard resources={resources || []} />
            )}
        </div>
    );
};

export default TheLab;
