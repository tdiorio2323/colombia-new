import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InterestFormModal from './components/InterestFormModal';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <div className="bg-brand-dark text-stone-200 font-sans leading-relaxed tracking-wide">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-10"
          style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
        ></div>
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<Home onExclusiveAccessClick={openModal} />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </div>
        <InterestFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </BrowserRouter>
  );
};

export default App;
