
import React from 'react';
import type { EliteMember } from '../types';
import { eliteMembers } from './data';
import SectionTitle from './SectionTitle';
import { CrownIcon, DiamondIcon } from './Icons';

const MemberCard: React.FC<{ member: EliteMember }> = ({ member }) => {
    return (
        <div className="flex items-center justify-between bg-brand-dark-2/50 p-4 rounded-xl border border-stone-700/50">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-dark text-brand-gold font-bold text-lg rounded-full flex items-center justify-center">
                    #{member.rank}
                </div>
                <div>
                    <p className="font-bold text-white">{member.name} {member.countryFlag}</p>
                    <p className="text-sm text-stone-400">Investment: <span className="text-brand-rose">{member.investment}</span></p>
                    <p className="text-xs text-stone-500">{member.title}</p>
                </div>
            </div>
            <DiamondIcon className="w-6 h-6 text-brand-gold/50" />
        </div>
    );
};


const EliteMembers: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-brand-dark-2">
      <div className="container mx-auto">
        <SectionTitle title="Elite Members" subtitle="Join the world's most distinguished luxury community" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-4">
                {eliteMembers.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
            <div className="bg-brand-dark-2/50 border border-stone-700/50 rounded-2xl p-8 md:p-12 text-center hover:border-brand-rose/50 hover:shadow-glow transition-all duration-300">
                <h3 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-3">Join the Elite</h3>
                <p className="text-stone-300 mb-8">Become part of the world's most exclusive luxury community and experience privileges that transcend imagination.</p>
                <ul className="space-y-3 text-left mb-8 inline-block">
                    <li className="flex items-center gap-3">
                        <CrownIcon className="w-5 h-5 text-brand-gold"/>
                        <span>Private yacht access worldwide</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CrownIcon className="w-5 h-5 text-brand-gold"/>
                        <span>Exclusive content and experiences</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CrownIcon className="w-5 h-5 text-brand-gold"/>
                        <span>VIP privileges and treatment</span>
                    </li>
                </ul>
                <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-gradient text-brand-dark font-bold text-lg rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300">
                    <CrownIcon className="w-6 h-6"/>
                    Join Elite Circle
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EliteMembers;
