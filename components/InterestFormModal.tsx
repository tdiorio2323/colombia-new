
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CrownIcon, CloseIcon } from './Icons';

interface InterestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InterestFormModal: React.FC<InterestFormModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset form on close
    if (!isOpen) {
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setError(null);
      }, 300); // Allow for closing animation
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Submit to our Vercel API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      // Close modal and navigate to thank you page
      onClose();
      setTimeout(() => {
        navigate('/thank-you');
      }, 300);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-[fade-in_0.3s_ease-out]"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative bg-brand-dark-2 border border-stone-700/50 rounded-2xl p-8 md:p-12 w-full max-w-lg m-4 text-white shadow-glow"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-3">Exclusive Inquiry</h3>
              <p className="text-stone-400">Complete the form below to express your interest in our exclusive experiences.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-brand-dark border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                  placeholder="e.g. Sofia Vergara"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-brand-dark border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-brand-dark border border-stone-600 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all"
                  placeholder="Tell us about your desired experience..."
                ></textarea>
              </div>
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-auto px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
        </>
      </div>
    </div>
  );
};

export default InterestFormModal;
