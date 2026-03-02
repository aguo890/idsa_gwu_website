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
    const textColor = variant === 'white' ? '#FFFFFF' : '#000000';
    const boxBg = variant === 'white' ? '#FFFFFF' : '#000000';
    const boxText = variant === 'white' ? '#000000' : '#FFFFFF';

    return (
        <svg
            viewBox="0 0 80 160"
            className={`select-none pointer-events-none ${className}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Primary IDSA Mark */}
            <g fill={textColor} fontFamily="Inter, sans-serif" fontWeight="900" textAnchor="middle">
                <text x="40" y="45" fontSize="56" letterSpacing="-2">i</text>
                <text x="40" y="85" fontSize="42" letterSpacing="-1">D</text>
                <text x="40" y="120" fontSize="42" letterSpacing="-1">S</text>
                <text x="40" y="155" fontSize="42" letterSpacing="-1">A</text>
            </g>

            {/* Chapter Lockup Box */}
            <rect x="0" y="142" width="80" height="18" fill={boxBg} />
            <text x="40" y="154" fill={boxText} fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="7.5" textAnchor="middle" letterSpacing="0.5">{chapter}</text>
        </svg>
    );
};
