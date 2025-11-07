
import React, { useState, useEffect } from 'react';
import { CrownIcon, CloseIcon } from './Icons';
import { contactFormSchema } from '../lib/validation';
import { z } from 'zod';

interface InterestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const InterestFormModal: React.FC<InterestFormModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    // Reset form on close
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
        setIsSubmitting(false);
      }, 300); // Allow for closing animation
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse({ name, email, message });

      // In a real app, you'd send this data to a server
      console.log('Validated data:', validatedData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors: FormErrors = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            formErrors[err.path[0] as keyof FormErrors] = err.message;
          }
        });
        setErrors(formErrors);
      }
    } finally {
      setIsSubmitting(false);
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

        {isSubmitted ? (
          <div className="text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center">
                <CrownIcon className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="text-3xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-3">Thank You!</h3>
            <p className="text-stone-300">Your inquiry has been received. We will be in touch shortly to discuss the details of your exclusive experience.</p>
          </div>
        ) : (
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
                  disabled={isSubmitting}
                  className={`w-full bg-brand-dark border rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-stone-600 focus:ring-brand-rose'
                  }`}
                  placeholder="e.g. Sofia Vergara"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full bg-brand-dark border rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-stone-600 focus:ring-brand-rose'
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  className={`w-full bg-brand-dark border rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-stone-600 focus:ring-brand-rose'
                  }`}
                  placeholder="Tell us about your desired experience..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-auto px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InterestFormModal;
