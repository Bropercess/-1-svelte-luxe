'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@svelteluxe.com',
    link: 'mailto:hello@svelteluxe.com',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: 'Visit Us',
    value: '123 Fashion Avenue, New York, NY 10001',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon - Fri: 9am - 6pm EST',
    link: '#',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="section-padding pt-16 pb-12 md:pt-24 md:pb-16">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-overline mb-3">Get in Touch</p>
            <h1 className="heading-display mb-4">Contact Us</h1>
            <p className="text-body max-w-lg mx-auto">
              We&apos;d love to hear from you. Whether you have a question about our
              collections, sizing, or anything else, our team is here to help.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={info.label} delay={index * 0.1}>
              <a
                href={info.link}
                className="block p-8 border border-brand-light hover:border-brand-charcoal transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-4 text-brand-silver group-hover:text-brand-black transition-colors duration-300">
                  {info.icon}
                </div>
                <h3 className="text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                  {info.label}
                </h3>
                <p className="text-xs font-light text-brand-charcoal leading-relaxed">
                  {info.value}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding section-spacing bg-brand-offwhite">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Send a Message</p>
              <h2 className="heading-section">We&apos;re Here to Help</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 border border-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="heading-sub mb-3">Message Sent</h3>
                <p className="text-body">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-brand-light text-sm font-light tracking-wider placeholder:text-brand-silver focus:outline-none focus:border-brand-black transition-colors duration-300"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-brand-light text-sm font-light tracking-wider placeholder:text-brand-silver focus:outline-none focus:border-brand-black transition-colors duration-300"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-brand-light text-sm font-light tracking-wider placeholder:text-brand-silver focus:outline-none focus:border-brand-black transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-brand-light text-sm font-light tracking-wider text-brand-gray focus:outline-none focus:border-brand-black transition-colors duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="orders">Order Support</option>
                    <option value="sizing">Sizing Help</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-white border border-brand-light text-sm font-light tracking-wider placeholder:text-brand-silver focus:outline-none focus:border-brand-black transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <div className="text-center pt-4">
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
