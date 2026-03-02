import React from 'react';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        source: 'GW Today',
        title: 'GW Students Win U.S. Finals of 2025 L’Oréal Brandstorm',
        excerpt: 'A team of three George Washington University students earned first place in the U.S. finals of the 2025 L’Oréal Brandstorm Competition. The team will advance to the international semifinals in Paris this June.',
        link: 'https://gwtoday.gwu.edu/gw-students-win-us-finals-2025-loreal-brandstorm-competition',
        date: 'May 2, 2025',
        isExternal: true
    },
    {
        id: 2,
        source: 'Industry Recognition',
        title: "L'Oréal Brandstorm 2025 US champions!",
        excerpt: "What an incredible week at the L'Oréal 2025 Brandstorm US Finals! We were blown away by the innovation and passion of the top 5 teams who joined us in NYC. Looks Max, get ready for Paris!",
        link: '#',
        date: 'Recent',
        isExternal: true
    },
    {
        id: 3,
        source: 'Lab Insights',
        title: 'COMING SOON: AI in Design',
        excerpt: 'Explore how AI is reshaping the design process with data-driven insights. Understand the fusion of creativity and technology, driving innovative solutions and exceeding modern design demands.',
        link: '#',
        date: 'Upcoming',
        isExternal: false
    }
];

export const NewsUpdates: React.FC = () => {
    return (
        <section className="w-full">
            <div className="flex items-center gap-4 mb-10">
                <h3 className="text-xs font-display font-black uppercase tracking-[0.3em] text-black">
                    Latest Insights & News
                </h3>
                <div className="h-px flex-grow bg-gray-100 border-4 border-black" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.map(item => (
                    <div key={item.id} className="brutalist-panel p-8 rounded-2xl flex flex-col hover:-translate-y-2 hover:bg-gray-100 border-4 border-black transition-all duration-500 group border hover:border-4 border-black">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[9px] uppercase font-bold tracking-widest text-gw-buff bg-gw-buff/10 border border-gw-buff/20 px-2 py-1 rounded">
                                {item.source}
                            </span>
                            <div className="flex items-center gap-2 text-black">
                                <Calendar size={12} />
                                <span className="text-[10px] uppercase tracking-widest font-bold">
                                    {item.date}
                                </span>
                            </div>
                        </div>

                        <h4 className="text-2xl font-display font-black text-black mb-4 leading-tight group-hover:text-black transition-colors">
                            {item.title}
                        </h4>

                        <p className="text-sm text-black font-light leading-relaxed mb-8 flex-grow">
                            {item.excerpt}
                        </p>

                        <a
                            href={item.link}
                            target={item.isExternal && item.link !== '#' ? "_blank" : undefined}
                            rel={item.isExternal && item.link !== '#' ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-black transition-colors mt-auto group/btn w-fit"
                        >
                            Learn More
                            {item.isExternal ? (
                                <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            ) : (
                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
