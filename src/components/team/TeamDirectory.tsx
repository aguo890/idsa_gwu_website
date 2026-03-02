import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

type TeamMember = {
    id: string;
    name: string;
    role: string;
    quote?: string;
    tier: 'Founder' | 'VP' | 'Director';
};

const teamMembers: TeamMember[] = [
    // Founders
    { id: '1', name: 'David M. Perchuk', role: 'Chief Design Officer | Founding Chapter President', quote: "Design is not only how it looks, and feels, but it's how it works toward humanity", tier: 'Founder' },
    { id: '2', name: 'Barney J. Smith', role: 'Co-Founder | Chief Financial Officer', quote: "Design is the steps we take to bridge real experiences with products and innovation; to make something for every movement.", tier: 'Founder' },
    { id: '3', name: 'Shoki Sakuma', role: 'Co-Founder | Chief Brand Marketing Officer', quote: "Marketing through design aims to meet needs and redefine consumer lifestyles", tier: 'Founder' },

    // VPs
    { id: '4', name: 'Mitchell Sozio', role: 'Chief Advisory Officer | SVP of the E-Board', tier: 'VP' },
    { id: '5', name: 'Jean-Francois Mbakop', role: 'Senior Vice President | Technology', tier: 'VP' },
    { id: '6', name: 'Rudransh Singh', role: 'Senior Vice President | External Affairs', tier: 'VP' },
    { id: '7', name: 'Yibo Jin', role: 'SVP | UI/UX Strategy & Webmaster', tier: 'VP' },
    { id: '8', name: 'David Bormann', role: 'Group VP | STEM Design & Research-Engineering', tier: 'VP' },
    { id: '9', name: 'Brittni LeVine', role: 'VP | Events Coordination, Talent + Membership', tier: 'VP' },
    { id: '10', name: 'Lydia Liu', role: 'Vice President | Brand Engagement & Marketing', tier: 'VP' },
    { id: '11', name: 'Aiden Inoue', role: 'Group VP | Operations & Assistant for E-board', tier: 'VP' },

    // Directors
    { id: '12', name: 'Alessandro Testani', role: 'Senior Director | Photo/Video & New Media Operations', tier: 'Director' },
    { id: '13', name: 'Michael Sawula', role: 'Senior Director | Operations', tier: 'Director' },
    { id: '14', name: 'Le\'har Mishra', role: 'Senior Director | Outreach & Community Relations', tier: 'Director' },
    { id: '15', name: 'Kaitlin Yang', role: 'Senior Director | Brand Marketing', tier: 'Director' },
    { id: '16', name: 'Tiffany (MU) Qin', role: 'Senior Director | Brand Engagement & Marketing', tier: 'Director' },
];

const renderTeamTier = (tierName: string, tierSubtitle: string, members: TeamMember[]) => {
    if (members.length === 0) return null;
    return (
        <div className="mb-16 last:mb-0">
            <div className="border-b border-4 border-black pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h3 className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-black">
                    {tierName}
                </h3>
                <span className="text-black italic font-serif text-sm">
                    {tierSubtitle}
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map(member => (
                    <div key={member.id} className="brutalist-panel p-6 rounded-2xl flex flex-col gap-4 hover:scale-[1.02] hover:bg-gray-100 border-4 border-black transition-all duration-300 group cursor-pointer border hover:border-4 border-black">
                        <div className="flex items-start justify-between">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex-shrink-0 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow duration-300 mb-2" />
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                                <a href="#" className="hover:text-black transition-colors" title="LinkedIn"><Linkedin size={14} /></a>
                                <a href="#" className="hover:text-black transition-colors" title="Email"><Mail size={14} /></a>
                            </div>
                        </div>

                        <div className="flex flex-col flex-grow">
                            <h4 className="text-black font-display font-bold text-sm tracking-wide group-hover:text-black transition-colors">
                                {member.name}
                            </h4>
                            <p className="text-[9px] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-gw-buff to-white/60 tracking-widest mt-1 min-h-[2.5rem]">
                                {member.role}
                            </p>

                            {member.quote && (
                                <p className="mt-4 text-xs text-black font-light italic leading-relaxed pt-4 border-t border-4 border-black relative">
                                    <span className="text-2xl text-black absolute -top-1 left-0 font-serif leading-none">"</span>
                                    <span className="ml-4 block">{member.quote}</span>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TeamDirectory: React.FC = () => {
    const founders = teamMembers.filter(m => m.tier === 'Founder');
    const vps = teamMembers.filter(m => m.tier === 'VP');
    const directors = teamMembers.filter(m => m.tier === 'Director');

    return (
        <section className="w-full mt-24 relative z-10">
            <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
                <span className="text-gw-buff/80 font-display font-bold uppercase tracking-[0.2em] text-[10px] bg-gw-buff/10 w-max mx-auto md:mx-0 px-3 py-1 rounded-full border border-gw-buff/20 backdrop-blur-sm">
                    Welcome to Our Team Directory
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-black drop-shadow-brutal-sm leading-tight mt-4">
                    The #1 IDSA Team <br className="hidden md:block" /> in D.C.
                </h2>
                <p className="text-black max-w-xl text-sm md:text-base mt-4 mx-auto md:mx-0 font-light">
                    Transform your organization with TeamHorizon, where innovation meets collaboration effectively.
                </p>
            </div>

            <div className="brutalist-panel p-6 md:p-12 rounded-3xl">
                {renderTeamTier('Our Founders', '“Not just founders. Dream builders.”', founders)}
                {renderTeamTier('Our Vice Presidents', '“Not just VPs. Vision keepers.”', vps)}
                {renderTeamTier('Our Directors', '“Director: turning teamwork into magic.”', directors)}
            </div>
        </section>
    );
};
