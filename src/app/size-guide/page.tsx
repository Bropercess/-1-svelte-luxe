'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const sizeChart = {
  tops: {
    headers: ['Size', 'US', 'UK', 'EU', 'Bust (in)', 'Bust (cm)', 'Waist (in)', 'Waist (cm)'],
    rows: [
      ['XS', '0-2', '4-6', '32-34', '31-32', '79-81', '24-25', '61-64'],
      ['S', '4-6', '8-10', '36-38', '33-34', '84-86', '26-27', '66-69'],
      ['M', '8-10', '12-14', '40-42', '35-36', '89-91', '28-29', '71-74'],
      ['L', '12-14', '16-18', '44-46', '37-39', '94-99', '30-32', '76-81'],
      ['XL', '16', '20', '48', '40-42', '102-107', '33-35', '84-89'],
    ],
  },
  bottoms: {
    headers: ['Size', 'US', 'UK', 'EU', 'Waist (in)', 'Waist (cm)', 'Hip (in)', 'Hip (cm)', 'Inseam (in)'],
    rows: [
      ['XS', '0-2', '4-6', '32-34', '24-25', '61-64', '34-35', '86-89', '25'],
      ['S', '4-6', '8-10', '36-38', '26-27', '66-69', '36-37', '91-94', '26'],
      ['M', '8-10', '12-14', '40-42', '28-29', '71-74', '38-39', '97-99', '27'],
      ['L', '12-14', '16-18', '44-46', '30-32', '76-81', '40-42', '102-107', '27'],
      ['XL', '16', '20', '48', '33-35', '84-89', '43-45', '109-114', '28'],
    ],
  },
};

const measurementGuide = [
  {
    area: 'Bust',
    instruction: 'Measure around the fullest part of your bust, keeping the tape parallel to the floor.',
  },
  {
    area: 'Waist',
    instruction: 'Measure around your natural waistline, the narrowest part of your torso.',
  },
  {
    area: 'Hips',
    instruction: 'Measure around the fullest part of your hips, approximately 8 inches below your waist.',
  },
  {
    area: 'Inseam',
    instruction: 'Measure from the crotch seam to the bottom of the leg along the inner seam.',
  },
];

const faqs = [
  {
    question: 'What size should I order if I\'m between sizes?',
    answer: 'We recommend sizing up for a more relaxed fit, or sizing down if you prefer compression. Our fabrics have generous four-way stretch that adapts to your body.',
  },
  {
    question: 'Do your leggings run true to size?',
    answer: 'Yes, our leggings are designed to be true to size with a sculpting compression fit. The premium Italian fabric provides gentle support while allowing full range of motion.',
  },
  {
    question: 'How should the sports bra fit?',
    answer: 'Your sports bra should feel snug but not restrictive. You should be able to fit two fingers under the band. If the straps dig in or the band rides up, try adjusting your size.',
  },
  {
    question: 'Can I exchange for a different size?',
    answer: 'Absolutely. We offer complimentary exchanges on all unworn items within 30 days of delivery. Simply contact our team and we\'ll arrange the exchange.',
  },
];

export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState<'tops' | 'bottoms'>('tops');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="section-padding pt-16 pb-12 md:pt-24 md:pb-16">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-overline mb-3">Perfect Fit</p>
            <h1 className="heading-display mb-4">Size Guide</h1>
            <p className="text-body max-w-lg mx-auto">
              Finding your perfect fit is essential. Use our comprehensive size guide
              to ensure every piece feels as good as it looks.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* How to Measure */}
      <section className="section-padding pb-16">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Step One</p>
              <h2 className="heading-sub">How to Measure</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {measurementGuide.map((item, index) => (
                <div
                  key={item.area}
                  className="flex gap-5 p-6 border border-brand-light"
                >
                  <span className="font-display text-3xl text-brand-light flex-shrink-0 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[11px] tracking-ultra-wide uppercase font-light mb-2">
                      {item.area}
                    </h3>
                    <p className="text-body">{item.instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Size Chart */}
      <section className="section-padding section-spacing bg-brand-offwhite">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Step Two</p>
              <h2 className="heading-sub">Find Your Size</h2>
            </div>
          </AnimatedSection>

          {/* Tab Switch */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center gap-1 mb-10">
              {(['tops', 'bottoms'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-[11px] tracking-ultra-wide uppercase font-light transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-brand-black text-white'
                      : 'bg-white text-brand-gray hover:text-brand-black'
                  }`}
                >
                  {tab === 'tops' ? 'Tops & Sports Bras' : 'Leggings & Bottoms'}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Table */}
          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead>
                  <tr>
                    {sizeChart[activeTab].headers.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-4 text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray border-b border-brand-light text-left whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeChart[activeTab].rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-brand-cream/50 transition-colors duration-200"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-4 text-xs font-light border-b border-brand-light/50 whitespace-nowrap ${
                            cellIndex === 0
                              ? 'font-display text-base tracking-wider text-brand-black'
                              : 'text-brand-gray'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Fit Tip */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 p-6 bg-white border border-brand-light text-center">
              <p className="text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray mb-2">
                Fit Tip
              </p>
              <p className="text-sm font-light text-brand-charcoal">
                All Svelte Luxe pieces are designed with premium four-way stretch fabric.
                If you&apos;re between sizes, we recommend staying true to size for our
                signature sculpting fit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding section-spacing">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-overline mb-3">Common Questions</p>
              <h2 className="heading-sub">Sizing FAQ</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="border-b border-brand-light">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full py-6 text-left"
                  >
                    <span className="text-sm font-light tracking-wider text-brand-charcoal pr-8">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand-gray flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-body pb-6">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="section-padding section-spacing bg-brand-black text-white text-center">
        <AnimatedSection>
          <p className="text-[10px] tracking-super-wide uppercase font-light text-white/40 mb-4">
            Still Unsure?
          </p>
          <h2 className="heading-section text-white mb-4">
            We&apos;re Here to Help
          </h2>
          <p className="text-sm font-light text-white/50 max-w-md mx-auto mb-8">
            Our sizing specialists are available to provide personalized fit recommendations.
          </p>
          <Link href="/contact" className="btn-white">
            Contact Us
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
