import React from 'react';
import type { Experience } from '../types';
import { experiences } from './data';
import SectionTitle from './SectionTitle';
import { CheckIcon } from './Icons';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  const Icon = experience.icon;
  return (
    <div className="bg-brand-dark-2/50 border border-stone-700/50 rounded-2xl p-8 backdrop-blur-md flex flex-col text-center hover:border-brand-rose/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
      <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center">
        <Icon className="w-8 h-8 text-brand-dark" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-white mb-2">{experience.title}</h3>
      <p className="text-stone-400 mb-4 flex-grow">{experience.description}</p>
      <p className="font-semibold text-brand-gold mb-6">{experience.duration}</p>
      <ul className="text-left space-y-2 mb-8">
        {experience.features.map((feature) => (
          <li key={`${experience.id}-${feature}`} className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-brand-rose" />
            <span className="text-stone-300">{feature}</span>
          </li>
        ))}
      </ul>
      <p className="text-4xl font-serif font-bold text-white mt-auto mb-6">{experience.price}</p>
      <button className="w-full mt-auto px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300">
        Reserve Now
      </button>
    </div>
  );
};

const ExclusiveExperiences: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Exclusive Experiences"
          subtitle="Indulge in luxury experiences crafted for those who demand perfection"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveExperiences;
