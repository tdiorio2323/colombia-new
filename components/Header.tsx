import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CrownIcon } from './Icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Experiences', sectionId: 'experiences' },
    { name: 'Content', sectionId: 'content' },
    { name: 'Collection', sectionId: 'collection' },
    { name: 'Members', sectionId: 'members' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-stone-800/50">
      <div className="container mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <CrownIcon className="w-8 h-8 text-brand-gold group-hover:text-brand-rose transition-colors" />
            <span className="text-xl md:text-2xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient">
              Colombian Luxury
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-stone-300 hover:text-brand-rose transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </>
            ) : (
              <Link
                to="/"
                className="text-stone-300 hover:text-brand-rose transition-colors font-medium"
              >
                Home
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-300 hover:text-brand-rose transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-stone-800/50 pt-4">
            <div className="flex flex-col gap-4">
              {isHome ? (
                <>
                  {navLinks.map((link) => (
                    <button
                      key={link.sectionId}
                      onClick={() => scrollToSection(link.sectionId)}
                      className="text-stone-300 hover:text-brand-rose transition-colors font-medium text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-stone-300 hover:text-brand-rose transition-colors font-medium"
                >
                  Home
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
