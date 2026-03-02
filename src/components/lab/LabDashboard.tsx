import React from 'react';
import type { LabResource, EquipmentStatus } from '../../types/resource';

const StatusBadge: React.FC<{ status: EquipmentStatus }> = ({ status }) => {
    const colors = {
        Available: 'bg-green-500',
        'In Use': 'bg-yellow-500',
        Maintenance: 'bg-red-500',
        Offline: 'bg-gray-400',
    };

    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors[status]} animate-pulse`} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-black">{status}</span>
        </div>
    );
};

export const ResourceCard: React.FC<{ resource: LabResource }> = ({ resource }) => (
    <div className="group p-4 brutalist-panel hover:border-4 border-black transition-transform duration-200 rounded-xl">
        <div className="flex justify-between items-start mb-4">
            <StatusBadge status={resource.status} />
            {resource.trainingRequired && (
                <span className="text-[8px] bg-gray-100 border-4 border-black border border-4 border-black text-black px-2 py-0.5 font-bold uppercase tracking-tighter rounded">
                    Training Req.
                </span>
            )}
        </div>
        <h4 className="text-sm font-display font-bold text-black group-hover:text-black transition-colors">
            {resource.name}
        </h4>
        <p className="text-[10px] text-black uppercase mt-1 tracking-tight">
            {resource.location}
        </p>
    </div>
);

export const LabDashboard: React.FC<{ resources: LabResource[] }> = ({ resources }) => {
    const categories = Array.from(new Set(resources.map(r => r.category)));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
                <div key={category} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h3 className="text-xs font-display font-black uppercase tracking-[0.3em] text-gw-light-blue shadow-blue-500/20 drop-shadow-md">
                            {category}
                        </h3>
                        <div className="h-px flex-grow bg-gray-100 border-4 border-black" />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {resources
                            .filter(r => r.category === category)
                            .map(resource => (
                                <ResourceCard key={resource.id} resource={resource} />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
