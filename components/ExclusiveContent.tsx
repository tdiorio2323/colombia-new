
import React from 'react';
import type { ContentItem } from '../types';
import { contentItems } from './data';
import SectionTitle from './SectionTitle';
import { PlayIcon, CrownIcon } from './Icons';

const ContentCard: React.FC<{ item: ContentItem }> = ({ item }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group aspect-[3/4] shadow-lg">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {item.isVip && (
        <div className="absolute top-4 right-4 bg-brand-gold/80 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <CrownIcon className="w-3 h-3"/>
          VIP
        </div>
      )}
      
      {item.type === 'video' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <PlayIcon className="w-8 h-8 text-white" />
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-xl font-bold font-serif">{item.title}</h3>
        <p className="text-stone-300 text-sm">{item.subtitle}</p>
      </div>
    </div>
  );
};

const ExclusiveContent: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-brand-dark-2">
      <div className="container mx-auto">
        <SectionTitle title="Exclusive Content" subtitle="Behind-the-scenes luxury moments from exclusive locations" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveContent;
