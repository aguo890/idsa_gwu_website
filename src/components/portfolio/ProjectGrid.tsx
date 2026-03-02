import React from 'react';
import type { IndustrialDesignProject } from '../../types/project';
import { motion } from 'framer-motion';

/**
 * ProjectCard Component
 * Implements high-performance image patterns:
 * - Lazy loading for off-screen gallery items.
 * - Loading placeholder (gray bg) during decode.
 * - Modern micro-interactions via Framer Motion.
 */
export const ProjectCard: React.FC<{ project: IndustrialDesignProject }> = ({ project }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-transform duration-200"
    >
        {/* Image Container */}
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
            <img
                src={project.primaryImageURL}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {project.isSMASubmission && (
                <div className="absolute top-4 left-4 bg-gw-blue text-white px-3 py-1 flex flex-col items-center leading-none">
                    <span className="text-[10px] uppercase font-black">SMA</span>
                    <span className="text-[8px] opacity-70">Award</span>
                </div>
            )}
        </div>

        {/* Content */}
        <div className="p-6">
            <span className="text-[10px] text-gw-red font-bold uppercase tracking-widest border-b border-gw-red/20 pb-1 mb-4 inline-block">
                {project.socialImpactPillar}
            </span>
            <h3 className="text-xl font-display font-black text-gw-blue leading-tight mb-2 group-hover:text-gw-light-blue transition-colors">
                {project.title}
            </h3>
            <p className="text-sm text-gray-500 font-light line-clamp-2 mb-6">
                {project.abstract}
            </p>

            {/* Metadata Tags */}
            <div className="flex flex-wrap gap-2 text-[8px] font-bold uppercase tracking-tighter text-gray-400">
                {project.metadataTags.map(tag => (
                    <span key={tag} className="border border-gray-100 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

export const ProjectGrid: React.FC<{ projects: IndustrialDesignProject[] }> = ({ projects }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
);
