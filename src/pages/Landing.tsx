import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { EventFeature } from '../components/events/EventFeature';
import { Testimonials } from '../components/social/Testimonials';
import { NewsUpdates } from '../components/social/NewsUpdates';

const Landing: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col gap-24 relative z-10 max-w-[1600px] mx-auto"
    >
        <Hero />
        <EventFeature />
        <Testimonials />
        <NewsUpdates />
    </motion.div>
);

export default Landing;
