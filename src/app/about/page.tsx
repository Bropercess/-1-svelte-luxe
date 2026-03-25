'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Newsletter from '@/components/Newsletter';

const values = [
  {
    number: '01',
    title: 'Uncompromising Quality',
    description:
      'We source only the finest performance fabrics from Italian mills, ensuring every piece meets the highest standards of luxury and functionality.',
  },
  {
    number: '02',
    title: 'Intentional Design',
    description:
      'Every stitch, seam, and silhouette is meticulously crafted. We believe in creating pieces that are both beautiful and purposeful.',
  },
  {
    number: '03',
    title: 'Sustainable Future',
    description:
      'From eco-conscious materials to ethical manufacturing, we are committed to creating a positive impact on the planet and its people.',
  },
  {
    number: '04',
    title: 'Empowering Women',
    description:
      'We design for the woman who demands the best. Our pieces are made to inspire confidence, power, and grace in every movement.',
  },
];

const timeline = [
  { year: '2019', event: 'Founded in New York with a vision to redefine luxury activewear.' },
  { year: '2020', event: 'Launched our debut collection with 12 signature pieces.' },
  { year: '2021', event: 'Expanded to 6 international markets and 50,000 customers.' },
  { year: '2022', event: 'Introduced our sustainable fabric line, reducing carbon footprint by 40%.' },
  { year: '2023', event: 'Opened our flagship studio in SoHo and launched the Inner Circle membership.' },
  { year: '2024', event: 'Celebrated 100,000 customers and expanded to 12 countries worldwide.' },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-studio.jpg"
            alt="Svelte Luxe design studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 section-padding w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] tracking-super-wide uppercase font-light text-white/60 mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-white mb-6"
          >
            Redefining<br />
            <span className="italic">Athletic Luxury</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm font-light text-white/60 max-w-lg mx-auto"
          >
            We believe the modern woman deserves gym wear that matches her ambition&mdash;pieces
            that perform as beautifully as they look.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding section-spacing">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-overline mb-6">Our Mission</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide text-brand-charcoal">
              &ldquo;To create activewear that honors the intersection of performance
              and elegance&mdash;where every woman feels powerful, confident,
              and <span className="italic">undeniably herself.</span>&rdquo;
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding section-spacing bg-brand-offwhite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/brand-story.jpg"
                alt="Craftsmanship at Svelte Luxe"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <p className="text-overline mb-4">The Beginning</p>
              <h2 className="heading-section mb-6">
                Born From a<br />
                <span className="italic">Simple Belief</span>
              </h2>
              <div className="space-y-5">
                <p className="text-body">
                  Svelte Luxe was born in 2019 from a frustration shared by many women:
                  why should we sacrifice style for performance? Why can&apos;t our
                  workout wear be as thoughtfully designed as the rest of our wardrobe?
                </p>
                <p className="text-body">
                  Our founder, driven by a passion for both fitness and fashion,
                  set out to create a line that would bridge this gap. Working with
                  master pattern makers and sourcing premium Italian performance
                  fabrics, Svelte Luxe was crafted piece by piece in our New York studio.
                </p>
                <p className="text-body">
                  Today, we serve over 100,000 women across 12 countries, but our
                  mission remains the same: to create gym wear that makes every woman
                  feel extraordinary.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-spacing">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4">What We Stand For</p>
            <h2 className="heading-section">Our Values</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="flex gap-6">
                <span className="font-display text-4xl text-brand-light flex-shrink-0">
                  {value.number}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body">{value.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-spacing bg-brand-black text-white">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-super-wide uppercase font-light text-white/40 mb-4">
              Our Journey
            </p>
            <h2 className="heading-section text-white">Milestones</h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <AnimatedSection key={item.year} delay={index * 0.1}>
              <div className="flex gap-8 md:gap-12 py-6 border-b border-white/10 items-start">
                <span className="font-display text-2xl md:text-3xl text-white/20 flex-shrink-0 w-20">
                  {item.year}
                </span>
                <p className="text-sm font-light text-white/60 leading-relaxed pt-1">
                  {item.event}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-spacing text-center">
        <AnimatedSection>
          <p className="text-overline mb-4">Experience the Difference</p>
          <h2 className="heading-section mb-8">
            Ready to Elevate<br />
            <span className="italic">Your Wardrobe?</span>
          </h2>
          <Link href="/collection" className="btn-primary">
            Shop the Collection
          </Link>
        </AnimatedSection>
      </section>

      <Newsletter />
    </div>
  );
}
