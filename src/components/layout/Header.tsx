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
        <div className="fixed top-0 left-0 right-0 z-50 w-full pt-4 sm:pt-6 pb-0 bg-transparent pointer-events-none flex flex-col items-center overflow-x-hidden">

            <header className="brutalist-panel max-w-[1400px] mx-auto w-[95%] overflow-visible pointer-events-auto border-4 border-white bg-black shadow-brutal-lg">
                {/* Utility Header */}
                <div className="hidden md:flex text-white py-2 px-8 justify-between items-center text-[10px] font-black tracking-widest uppercase border-b-4 border-white bg-black">
                    <div className="flex gap-6">
                        <a href="https://corcoran.gwu.edu" className="hover:invert motion-reduce:hover:invert-0 motion-reduce:hover:bg-white motion-reduce:hover:text-black cursor-crosshair px-2 py-1 transition-none motion-reduce:transition-colors flex items-center justify-center bg-black text-white">Corcoran Arts</a>
                    </div>
                    <div className="flex gap-6">
                        <button className="flex items-center gap-2 hover:invert motion-reduce:hover:invert-0 motion-reduce:hover:bg-white motion-reduce:hover:text-black cursor-crosshair px-2 py-1 transition-none motion-reduce:transition-colors bg-black text-white">
                            <Search size={14} strokeWidth={3} /> Search
                        </button>
                        <button className="flex items-center gap-2 hover:invert motion-reduce:hover:invert-0 motion-reduce:hover:bg-white motion-reduce:hover:text-black cursor-crosshair px-2 py-1 transition-none motion-reduce:transition-colors bg-black text-white">
                            <User size={14} strokeWidth={3} /> Login
                        </button>
                    </div>
                </div>

                <nav className="px-0 md:px-0 h-24 flex justify-between items-stretch relative bg-black">
                    {/* Logo Section */}
                    <NavLink to="/" className="flex items-center gap-6 group py-4 shrink-0 border-r-4 border-white px-6 md:px-8 hover:bg-white hover:text-black transition-none cursor-crosshair bg-black text-white">
                        <div className="h-full flex items-center justify-center relative overflow-hidden">
                            <IDSALogo variant="white" className="h-full w-auto object-contain max-h-16 origin-left transition-none group-hover:invert" />
                        </div>
                        <div className="hidden sm:flex flex-col justify-center">
                            <h1 className="font-display font-black text-4xl leading-none tracking-tighter uppercase transition-none">
                                IDSA
                            </h1>
                            <span className="text-xs font-black uppercase tracking-tight mt-1 transition-none">George Washington University</span>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-stretch flex-grow justify-end">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `
                                    flex flex-col group relative px-8 justify-center items-center border-l-4 border-white cursor-crosshair bg-black
                                    ${isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'}
                                    transition-none
                                `}
                            >
                                <span className="font-display font-black text-xl xl:text-3xl tracking-tighter uppercase leading-none transition-none">
                                    {item.label}
                                </span>
                                <span className={`text-[10px] font-black uppercase tracking-widest transition-none absolute bottom-3 whitespace-nowrap px-4 ${window.location.pathname.includes(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    {item.sub}
                                </span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button className="lg:hidden px-6 text-white bg-black hover:bg-white hover:text-black border-l-4 border-white transition-none flex items-center justify-center cursor-crosshair">
                        <Menu size={32} strokeWidth={3} />
                    </button>
                </nav>
            </header>
        </div>
    );
};
