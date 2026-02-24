import React from 'react';
import { NavLink } from 'react-router-dom';
import { IDSALogo } from '../brand/IDSALogo';
import { Search, User, Menu } from 'lucide-react';

const NAV_ITEMS = [
    { path: '/the-lab', label: 'The Lab', sub: 'Makerspace' },
    { path: '/the-work', label: 'The Work', sub: 'Portfolio' },
    { path: '/the-network', label: 'The Network', sub: 'Events' },
    { path: '/the-playbook', label: 'The Playbook', sub: 'Resources' },
];

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            {/* Utility Header */}
            <div className="bg-gw-blue text-white py-1 px-6 flex justify-between items-center text-[10px] tracking-widest uppercase">
                <div className="flex gap-4">
                    <a href="https://seas.gwu.edu" className="hover:text-gw-buff transition-colors">GW SEAS</a>
                    <a href="https://corcoran.gwu.edu" className="hover:text-gw-buff transition-colors">Corcoran Arts</a>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-1 hover:text-gw-buff transition-colors">
                        <Search size={10} /> Search
                    </button>
                    <button className="flex items-center gap-1 hover:text-gw-buff transition-colors">
                        <User size={10} /> Login
                    </button>
                </div>
            </div>

            <nav className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
                {/* Logo Section */}
                <NavLink to="/" className="flex items-center gap-4 group">
                    <IDSALogo className="transition-transform group-hover:scale-105" />
                    <div className="flex flex-col border-l border-gray-200 pl-4">
                        <h1 className="text-gw-blue font-display font-black text-xl leading-tight">
                            Design + <br /> Innovation Lab
                        </h1>
                        <span className="text-[10px] text-gray-400 uppercase tracking-tighter">George Washington University</span>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                flex flex-col group relative py-2
                ${isActive ? 'text-gw-blue' : 'text-gray-400 hover:text-gw-blue'}
                transition-luxury
              `}
                        >
                            <span className="font-display font-bold text-lg tracking-tight leading-none">
                                {item.label}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 left-0 whitespace-nowrap">
                                {item.sub}
                            </span>
                            {/* Active Indicator */}
                            <div
                                className={`
                  absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gw-red rounded-full
                  transition-transform origin-center
                  ${item.path === window.location.pathname ? 'scale-100' : 'scale-0'}
                `}
                            />
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <button className="lg:hidden p-2 text-gw-blue">
                    <Menu size={24} />
                </button>
            </nav>
        </header>
    );
};
