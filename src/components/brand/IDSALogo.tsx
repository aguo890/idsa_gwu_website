import React from 'react';
import type { ApprovedGWUColors, ApprovedChapterNames } from '../../types/branding';

interface IDSALogoProps {
    chapter?: ApprovedChapterNames;
    className?: string;
    variant?: ApprovedGWUColors;
}

/**
 * IDSA Logo Lockup Component (Refactored)
 * Enforces strict national brand guidelines using TS Literal Types:
 * 1. Vertical orientation only (enforced by layout).
 * 2. Lowercase 'i' at the top.
 * 3. Chapter name in a color-compliant box.
 */
export const IDSALogo: React.FC<IDSALogoProps> = ({
    chapter = 'GWU IDSA',
    className = '',
    variant = 'gw-blue'
}) => {
    const textColor = variant === 'white' ? 'text-white' : 'text-black';
    const boxBg = variant === 'white' ? 'bg-white' : 'bg-gw-blue';
    const boxText = variant === 'white' ? 'text-gw-blue' : 'text-white';

    return (
        <div className={`flex flex-col items-center select-none pointer-events-none ${className}`} style={{ transform: 'none !important' }}>
            {/* Primary IDSA Mark */}
            <div className={`flex flex-col items-center leading-none font-bold ${textColor}`}>
                <span className="text-4xl">i</span>
                <span className="text-2xl -mt-2">D</span>
                <span className="text-2xl -mt-1">S</span>
                <span className="text-2xl -mt-1">A</span>
            </div>

            {/* Chapter Lockup Box - Enforces approved names */}
            <div className={`mt-2 ${boxBg} px-3 py-1 flex items-center justify-center`}>
                <span className={`${boxText} font-display font-bold text-[8px] uppercase tracking-widest text-center`}>
                    {chapter}
                </span>
            </div>
        </div>
    );
};
