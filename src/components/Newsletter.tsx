'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding section-spacing bg-brand-offwhite">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-overline mb-4">Stay Connected</p>
          <h2 className="heading-section mb-6">Join the Inner Circle</h2>
          <p className="text-body max-w-md mx-auto mb-10">
            Be the first to discover new collections, receive exclusive offers,
            and gain access to members-only events.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white border border-brand-light text-sm font-light tracking-wider placeholder:text-brand-silver focus:outline-none focus:border-brand-black transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              {isSubmitted ? 'Thank You' : 'Subscribe'}
            </button>
          </form>
          <p className="text-[10px] text-brand-silver mt-4 tracking-wider">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
