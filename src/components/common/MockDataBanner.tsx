import React from 'react';

/**
 * MockDataBanner Component
 * Visually communicates the environment state.
 * Controlled by VITE_USE_MOCK_DATA environment variable.
 */
export const MockDataBanner: React.FC = () => {
    const isMockEnvironment = import.meta.env.VITE_USE_MOCK_DATA === 'true';

    if (!isMockEnvironment) return null;

    return (
        <div className="bg-gw-red text-black text-center py-2 text-sm font-bold uppercase tracking-[0.2em] sticky top-0 z-[100] shadow-xl">
            Notice: Operating in Mock Data Environment
        </div>
    );
};
