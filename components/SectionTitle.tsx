
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-5xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-2">
        {title}
      </h2>
      <p className="text-lg md:text-xl font-serif italic text-stone-400">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
