'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Newsletter from '@/components/Newsletter';

const categories = [
  {
    name: 'Leggings',
    description: 'Sculpted silhouettes',
    image: '/images/cat-leggings.jpg',
    href: '/collection',
  },
  {
    name: 'Sports Bras',
    description: 'Engineered support',
    image: '/images/cat-sportsbras.jpg',
    href: '/collection',
  },
  {
    name: 'Sets',
    description: 'Curated pairings',
    image: '/images/cat-sets.jpg',
    href: '/collection',
  },
];

const features = [
  { icon: '01', title: 'Premium Fabrics', desc: 'Italian-milled performance textiles with four-way stretch and moisture-wicking technology.' },
  { icon: '02', title: 'Sculpted Fit', desc: 'Precision-engineered patterns designed to flatter and enhance the natural silhouette.' },
  { icon: '03', title: 'Sustainable Craft', desc: 'Ethically produced using eco-conscious materials and responsible manufacturing.' },
  { icon: '04', title: 'Timeless Design', desc: 'Minimal aesthetics that transcend trends, designed to be worn season after season.' },
];

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Premium women's gym wear"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 section-padding w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] tracking-super-wide uppercase font-light text-white/60 mb-6"
            >
              New Season Collection
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[0.95] tracking-wide mb-8"
            >
              Elevate Your<br />
              <span className="italic">Performance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm md:text-base font-light text-white/60 max-w-md leading-relaxed mb-10"
            >
              Premium women&apos;s gym wear meticulously crafted with
              performance fabrics and timeless design. Where luxury meets athleticism.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/collection" className="btn-white">
                Shop Collection
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white text-xs font-light tracking-ultra-wide uppercase transition-all duration-500 ease-luxury hover:bg-white/10"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-super-wide uppercase text-white/40 font-light">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding section-spacing">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-overline mb-4">Curated For You</p>
            <h2 className="heading-section">Shop by Category</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.15}>
              <Link href={category.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-light mb-5">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  {/* Hover overlay button */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="px-8 py-3 bg-white text-brand-black text-[10px] tracking-ultra-wide uppercase font-light">
                      Explore
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-2xl tracking-wider mb-1">
                    {category.name}
                  </h3>
                  <p className="text-body-sm">{category.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Brand Features */}
      <section className="section-padding section-spacing bg-brand-black text-white">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-super-wide uppercase font-light text-white/40 mb-4">
              The Svelte Luxe Difference
            </p>
            <h2 className="heading-section text-white">Crafted for Excellence</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="text-center">
                <span className="font-display text-4xl text-white/10 mb-4 block">
                  {feature.icon}
                </span>
                <h3 className="font-display text-xl tracking-wider mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-white/40">
                  {feature.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/brand-story.jpg"
                alt="Our craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-lg">
              <p className="text-overline mb-4">Our Story</p>
              <h2 className="heading-section mb-6">
                Where Precision<br />
                <span className="italic">Meets Beauty</span>
              </h2>
              <p className="text-body mb-6">
                Born from a belief that women shouldn&apos;t have to choose between
                performance and aesthetics, Svelte Luxe reimagines what gym wear
                can be. Every piece is a study in balance&mdash;technical innovation
                married with timeless elegance.
              </p>
              <p className="text-body mb-8">
                We source the finest Italian performance fabrics, engineer each pattern
                for a sculpting fit, and finish every seam with the precision of haute
                couture. This is activewear elevated to an art form.
              </p>
              <Link href="/about" className="btn-secondary">
                Discover More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="section-padding py-16 border-y border-brand-light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '4.9', label: 'Average Rating' },
            { number: '12', label: 'Countries' },
            { number: '100%', label: 'Sustainable' },
          ].map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div>
                <p className="font-display text-3xl md:text-4xl tracking-wider mb-1">
                  {stat.number}
                </p>
                <p className="text-body-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
