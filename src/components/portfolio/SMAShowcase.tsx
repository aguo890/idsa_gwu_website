import React from 'react';
import type { IndustrialDesignProject } from '../../types/project';
import { ProjectCard } from './ProjectGrid';
import { motion } from 'framer-motion';

export const SMAShowcase: React.FC<{ projects: IndustrialDesignProject[] }> = ({ projects }) => {
    const smaProjects = projects.filter(p => p.isSMASubmission);

    if (smaProjects.length === 0) return null;

    return (
        <section className="bg-gw-blue text-white py-24 px-6 -mx-6 mb-20">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-gw-buff font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                            National Recognition
                        </span>
                        <h2 className="text-5xl font-display font-black text-white mt-4 tracking-tight">
                            Student Merit Awards
                        </h2>
                        <p className="mt-4 text-gw-buff/60 max-w-xl font-light leading-relaxed">
                            Highlighting design brilliance across five North American Districts.
                            The SMA represents the premier professional pipeline for emerging Industrial Designers.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 border border-gw-buff/20 text-gw-buff text-[10px] font-bold uppercase tracking-widest hover:bg-gw-buff hover:text-gw-blue transition-luxury">
                            Past Winners
                        </button>
                        <button className="px-6 py-3 bg-gw-buff text-gw-blue text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-luxury">
                            2025 Submission Guide
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {smaProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative group">
                                {/* Prestige Overlay */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-gw-buff/20 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-gw-blue border border-gw-buff/10 p-2">
                                    <ProjectCard project={project} />
                                </div>
                                {/* Award Badge */}
                                <div className="absolute top-8 right-8 bg-gw-red text-white py-2 px-4 shadow-2xl transform rotate-3">
                                    <span className="text-[10px] font-display font-black uppercase tracking-widest italic">
                                        {project.awardLevel}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
