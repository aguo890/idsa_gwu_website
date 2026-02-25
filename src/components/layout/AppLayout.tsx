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
        <div className="flex flex-col min-h-screen relative overflow-x-hidden text-white w-full">
            <MockDataBanner />
            <Header />

            <main className="flex-grow w-full pt-40 pb-16 px-4 sm:px-8 mx-auto flex flex-col items-center">
                <div className="w-full max-w-[1600px] flex flex-col">
                    {children}
                </div>
            </main>

            <footer className="border-t border-white/10 py-12 glass-panel mt-auto z-10 w-full relative">
                <div className="w-full px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-display font-black text-lg tracking-tight lowercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                            idsa gwu
                        </span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest">
                            Tompkins Hall M06 • 23rd & H Street NW
                        </span>
                    </div>
                    <div className="text-[10px] text-white/50 tracking-widest uppercase text-center md:text-right font-medium">
                        © {new Date().getFullYear()} Industrial Designers Society of America <br className="md:hidden" />
                        <span className="opacity-60">• GW Student Chapter</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
