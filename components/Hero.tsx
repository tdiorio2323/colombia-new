
import React from 'react';
import { CrownIcon } from './Icons';

interface HeroProps {
  onExclusiveAccessClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExclusiveAccessClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-6xl md:text-8xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient animate-gradient-x mb-4">
            Eimy Contreras
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-stone-300 mb-8">
            Experience the pinnacle of Colombian luxury through exclusive encounters, private adventures, and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <button 
              onClick={onExclusiveAccessClick}
              className="px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300 transform hover:scale-105">
              Exclusive Access
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-stone-500 text-stone-300 font-bold rounded-full hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105">
              Follow Journey
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 relative">
          <div className="absolute inset-0 bg-brand-gradient rounded-3xl transform -rotate-6 blur-2xl opacity-20"></div>
          <div className="relative bg-black/20 p-2 rounded-3xl backdrop-blur-sm transform rotate-3 shadow-2xl">
              <img src="https://picsum.photos/500/700" alt="Eimy Contreras" className="rounded-2xl w-full" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-4 rounded-xl flex justify-between items-center">
                  <div>
                      <p className="font-bold text-white">@soyeimycontreras</p>
                      <p className="text-sm text-stone-300">Colombian Goddess</p>
                  </div>
                  <button className="px-6 py-2 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-brand-rose transition-colors duration-300">Follow</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;