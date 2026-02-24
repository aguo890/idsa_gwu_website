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
        <div className="flex flex-col min-h-screen bg-white">
            <MockDataBanner />
            <Header />
            <main className="flex-grow">
                {children}
            </main>

            <footer className="border-t border-gray-100 py-12 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-gw-blue font-display font-black text-lg tracking-tight lowercase">idsa gwu</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                            Tompkins Hall M06 • 23rd & H Street NW
                        </span>
                    </div>
                    <div className="text-[10px] text-gray-400 tracking-widest uppercase text-center md:text-right">
                        © {new Date().getFullYear()} Industrial Designers Society of America <br className="md:hidden" />
                        <span className="opacity-60">• GW Student Chapter</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
