import { useState } from 'react';
import Hero from '../components/Hero';
import ExclusiveExperiences from '../components/ExclusiveExperiences';
import ExclusiveContent from '../components/ExclusiveContent';
import LuxuryCollection from '../components/LuxuryCollection';
import EliteMembers from '../components/EliteMembers';
import InterestFormModal from '../components/InterestFormModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Hero onExclusiveAccessClick={openModal} />
      <ExclusiveExperiences />
      <ExclusiveContent />
      <LuxuryCollection />
      <EliteMembers />
      <InterestFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
