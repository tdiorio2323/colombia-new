
import React from 'react';
import { CrownIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                    <CrownIcon className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                    <h1 className="text-xl font-bold font-serif text-white tracking-wider">Eimy Contreras</h1>
                    <p className="text-sm font-light text-stone-300 tracking-widest uppercase">Colombian Luxury</p>
                </div>
            </div>
            <p className="text-stone-400 max-w-sm">The world's most exclusive Colombian luxury experience. Made with ♥ in Colombia.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Experiences</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-brand-rose transition-colors">Yacht Adventures</a></li>
              <li><a href="#" className="hover:text-brand-rose transition-colors">Penthouse Encounters</a></li>
              <li><a href="#" className="hover:text-brand-rose transition-colors">Marina Sessions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-brand-rose transition-colors">elite@eimycontreras.com</a></li>
              <li><a href="#" className="hover:text-brand-rose transition-colors">@soyeimycontreras</a></li>
              <li><span className="flex items-center gap-2">Cartagena, Colombia 🇨🇴</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Eimy Contreras. Luxury Experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
