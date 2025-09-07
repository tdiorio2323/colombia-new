
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExclusiveExperiences from './components/ExclusiveExperiences';
import ExclusiveContent from './components/ExclusiveContent';
import LuxuryCollection from './components/LuxuryCollection';
import EliteMembers from './components/EliteMembers';
import Footer from './components/Footer';
import InterestFormModal from './components/InterestFormModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-brand-dark text-stone-200 font-sans leading-relaxed tracking-wide">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-10" 
        style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}
      ></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero onExclusiveAccessClick={openModal} />
          <ExclusiveExperiences />
          <ExclusiveContent />
          <LuxuryCollection />
          <EliteMembers />
        </main>
        <Footer />
      </div>
      <InterestFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;