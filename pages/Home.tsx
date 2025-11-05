import React from 'react';
import Hero from '../components/Hero';
import ExclusiveExperiences from '../components/ExclusiveExperiences';
import ExclusiveContent from '../components/ExclusiveContent';
import LuxuryCollection from '../components/LuxuryCollection';
import EliteMembers from '../components/EliteMembers';

interface HomeProps {
  onExclusiveAccessClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onExclusiveAccessClick }) => {
  return (
    <main>
      <Hero onExclusiveAccessClick={onExclusiveAccessClick} />
      <section id="experiences">
        <ExclusiveExperiences />
      </section>
      <section id="content">
        <ExclusiveContent />
      </section>
      <section id="collection">
        <LuxuryCollection />
      </section>
      <section id="members">
        <EliteMembers />
      </section>
    </main>
  );
};

export default Home;
