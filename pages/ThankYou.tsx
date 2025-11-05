import React from 'react';
import { Link } from 'react-router-dom';
import { CrownIcon } from '../components/Icons';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center animate-[fade-in_0.5s_ease-out]">
          <CrownIcon className="w-12 h-12 text-brand-dark" />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-6">
          Thank You!
        </h1>
        <p className="text-xl text-stone-300 mb-8 leading-relaxed">
          Your exclusive inquiry has been received. We will be in touch shortly to discuss the details of your luxury experience.
        </p>
        <p className="text-stone-400 mb-12">
          Our team typically responds within 24 hours. Please check your email for our correspondence.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300 transform hover:scale-105"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
