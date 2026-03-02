import React from 'react';
import { Header } from './Header';
import { MockDataBanner } from '../common/MockDataBanner';

interface AppLayoutProps {
    children: React.ReactNode;
}

/**
 * AppLayout Wrapper
 * Centralizes global navigation, footer, and environment-driven banners.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative overflow-x-hidden text-white w-full bg-black font-sans">
            <MockDataBanner />
            <Header />

            <main className="flex-grow w-full pt-48 pb-16 px-4 sm:px-8 mx-auto flex flex-col items-center">
                <div className="w-full max-w-[1600px] flex flex-col">
                    {children}
                </div>
            </main>

            <footer className="border-t-8 border-white py-16 bg-black mt-auto z-10 w-full relative">
                <div className="w-full px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col gap-4 relative md:-rotate-1">
                        <span className="text-white font-display font-black text-5xl md:text-7xl tracking-tighter uppercase flex items-center gap-4">
                            <span className="w-6 h-6 bg-white border-4 border-white drop-shadow-brutal-sm"></span>
                            IDSA GWU
                        </span>
                        <span className="text-sm md:text-base font-black text-white uppercase tracking-widest border-4 border-white inline-block px-4 py-2 w-fit bg-neutral-900 drop-shadow-brutal-sm hover:invert motion-reduce:hover:invert-0 motion-reduce:hover:bg-white motion-reduce:hover:text-black transition-none motion-reduce:transition-colors cursor-crosshair">
                            Tompkins Hall M06 • 23rd & H Street NW
                        </span>
                    </div>
                    <div className="text-sm font-black text-white tracking-widest uppercase text-center md:text-right flex flex-col items-end gap-2 md:rotate-1">
                        <span>© {new Date().getFullYear()} Industrial Designers Society of America</span>
                        <span className="bg-white text-black px-4 py-2 mt-2 inline-block border-4 border-white shadow-brutal-sm hover:invert motion-reduce:hover:invert-0 motion-reduce:hover:bg-black motion-reduce:hover:text-white transition-none motion-reduce:transition-colors cursor-crosshair">
                            GW Student Chapter
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
