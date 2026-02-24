import React from 'react';
import { motion } from 'framer-motion';

const Landing: React.FC = () => (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gw-buff/10 via-white to-white z-0" />
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-6 max-w-4xl"
        >
            <span className="text-gw-red font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Innovation for Social Impact
            </span>
            <h1 className="text-7xl md:text-9xl font-display font-black text-gw-blue tracking-tighter leading-[0.85]">
                MAKING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gw-blue to-gw-light-blue italic">
                    MATTER.
                </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                The George Washington University IDSA Student Chapter & Design + Innovation Lab.
                A multidisciplinary hub for industrial design, engineering, and arts.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
                <button className="bg-gw-red text-white px-8 py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-gw-blue transition-luxury shadow-xl shadow-gw-red/20">
                    Explore the Lab
                </button>
                <button className="bg-white border-2 border-gw-blue text-gw-blue px-8 py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-gw-blue hover:text-white transition-luxury">
                    View Selected Work
                </button>
            </div>
        </motion.div>
    </div>
);

export default Landing;
