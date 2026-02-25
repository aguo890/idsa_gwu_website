import React from 'react';
import { NavLink } from 'react-router-dom';
import { IDSALogo } from '../brand/IDSALogo';
import { Search, User, Menu } from 'lucide-react';

const NAV_ITEMS = [
    { path: '/highlights', label: 'Highlights', sub: 'Makerspace' },
    { path: '/leadership', label: 'Leadership', sub: 'The Team' },
    { path: '/projects', label: 'Projects', sub: 'Portfolio' },
    { path: '/events', label: 'Events', sub: 'The Network' },
    { path: '/our-blog', label: 'Our Blog', sub: 'Resources' },
];

export const Header: React.FC = () => {
    return (
        <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 w-full">
            <header className="glass-pill max-w-[1400px] mx-auto w-full transition-all duration-500 overflow-hidden">
                {/* Utility Header */}
                <div className="hidden md:flex text-white/70 py-1.5 px-8 justify-between items-center text-[9px] tracking-widest uppercase border-b border-white/10 bg-black/10">
                    <div className="flex gap-6">
                        <a href="https://corcoran.gwu.edu" className="hover:text-white transition-colors duration-300">Corcoran Arts</a>
                    </div>
                    <div className="flex gap-6">
                        <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                            <Search size={10} /> Search
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                            <User size={10} /> Login
                        </button>
                    </div>
                </div>

                <nav className="px-6 md:px-8 h-20 flex justify-between items-center relative">
                    {/* Logo Section */}
                    <NavLink to="/" className="flex items-center gap-4 group h-full py-3 shrink-0">
                        <div className="h-full flex items-center justify-center relative overflow-hidden">
                            <IDSALogo variant="white" className="h-full w-auto object-contain max-h-16 origin-left transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="hidden sm:flex flex-col border-l border-white/20 pl-4 py-1 justify-center">
                            <h1 className="text-white font-display font-black text-2xl leading-none tracking-tight">
                                IDSA
                            </h1>
                            <span className="text-[10px] text-white/50 uppercase tracking-tighter mt-1">George Washington University</span>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `
                                    flex flex-col group relative py-2
                                    ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}
                                    transition-luxury
                                `}
                            >
                                <span className="font-display font-bold text-base xl:text-lg tracking-tight leading-none group-hover:-translate-y-1 transition-transform duration-300">
                                    {item.label}
                                </span>
                                <span className="text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-1 left-0 whitespace-nowrap text-white/80 translate-y-2 group-hover:translate-y-0">
                                    {item.sub}
                                </span>
                                {/* Active Indicator */}
                                <div
                                    className={`
                                        absolute -left-3 xl:-left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full
                                        transition-all duration-500 origin-center filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                                        ${item.path === window.location.pathname ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                                    `}
                                />
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button className="lg:hidden p-2 text-white/80 hover:text-white transition-colors">
                        <Menu size={24} />
                    </button>
                </nav>
            </header>
        </div>
    );
};
