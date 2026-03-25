'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Selling'];

const filterCategories = [
  {
    name: 'Category',
    options: ['All', 'Leggings', 'Sports Bras', 'Sets', 'Tops', 'Shorts'],
  },
  {
    name: 'Size',
    options: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    name: 'Color',
    options: ['Black', 'White', 'Grey', 'Navy', 'Sage'],
  },
  {
    name: 'Price',
    options: ['Under $50', '$50 - $100', '$100 - $150', 'Over $150'],
  },
];

const placeholderProducts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: '',
  price: '',
}));

export default function CollectionPage() {
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<string[]>(['Category', 'Size']);

  const toggleFilter = (name: string) => {
    setExpandedFilters((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="section-padding pt-12 pb-8 md:pt-16 md:pb-10">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-overline mb-3">Explore</p>
            <h1 className="heading-display mb-4">All Collection</h1>
            <p className="text-body max-w-md mx-auto">
              Discover our full range of premium activewear, designed for those who
              refuse to compromise.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Filter Bar */}
      <div className="section-padding">
        <div className="flex items-center justify-between py-4 border-y border-brand-light">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase font-light"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Filters
          </button>

          {/* Product Count */}
          <p className="hidden lg:block text-[11px] tracking-wider font-light text-brand-gray">
            0 Products
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-[11px] tracking-ultra-wide uppercase font-light"
            >
              Sort: {selectedSort}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-3 h-3 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-brand-light shadow-lg z-20 min-w-[200px]"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`block w-full text-left px-5 py-3 text-[11px] tracking-wider font-light transition-colors duration-200 ${
                        selectedSort === option
                          ? 'bg-brand-black text-white'
                          : 'text-brand-charcoal hover:bg-brand-cream'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-10">
        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {filterCategories.map((category) => (
                <div key={category.name} className="border-b border-brand-light py-5">
                  <button
                    onClick={() => toggleFilter(category.name)}
                    className="flex items-center justify-between w-full"
                  >
                    <span className="text-[11px] tracking-ultra-wide uppercase font-light">
                      {category.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        expandedFilters.includes(category.name) ? 'rotate-180' : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {expandedFilters.includes(category.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          {category.options.map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <div className="w-4 h-4 border border-brand-light group-hover:border-brand-charcoal transition-colors duration-200 flex items-center justify-center">
                                {/* Checkbox visual */}
                              </div>
                              <span className="text-xs font-light text-brand-gray group-hover:text-brand-black transition-colors duration-200">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Clear Filters */}
              <button className="mt-6 text-[10px] tracking-ultra-wide uppercase font-light text-brand-silver hover:text-brand-black transition-colors duration-300 underline underline-offset-4">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-[11px] tracking-ultra-wide uppercase font-light">
                        Filters
                      </h3>
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="text-brand-gray hover:text-brand-black"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {filterCategories.map((category) => (
                      <div key={category.name} className="border-b border-brand-light py-5">
                        <button
                          onClick={() => toggleFilter(category.name)}
                          className="flex items-center justify-between w-full"
                        >
                          <span className="text-[11px] tracking-ultra-wide uppercase font-light">
                            {category.name}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              expandedFilters.includes(category.name) ? 'rotate-180' : ''
                            }`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        {expandedFilters.includes(category.name) && (
                          <div className="pt-4 space-y-3">
                            {category.options.map((option) => (
                              <label
                                key={option}
                                className="flex items-center gap-3 cursor-pointer group"
                              >
                                <div className="w-4 h-4 border border-brand-light group-hover:border-brand-charcoal transition-colors duration-200" />
                                <span className="text-xs font-light text-brand-gray group-hover:text-brand-black transition-colors duration-200">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="btn-primary w-full mt-8"
                    >
                      Apply Filters
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {placeholderProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.05}>
                  <div className="group cursor-pointer">
                    {/* Placeholder Image */}
                    <div className="relative aspect-[3/4] bg-gradient-to-b from-brand-light/60 to-brand-light mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={0.5}
                            stroke="currentColor"
                            className="w-12 h-12 text-brand-silver/50 mx-auto mb-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v14.25a1.5 1.5 0 0 0 1.5 1.5Z"
                            />
                          </svg>
                          <p className="text-[10px] tracking-widest uppercase text-brand-silver/60 font-light">
                            Coming Soon
                          </p>
                        </div>
                      </div>

                      {/* Quick Add on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
                        <div className="bg-brand-black text-white text-center py-3">
                          <span className="text-[10px] tracking-ultra-wide uppercase font-light">
                            Quick Add
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info Placeholder */}
                    <div className="space-y-2">
                      <div className="h-3 bg-brand-light/80 rounded w-3/4" />
                      <div className="h-3 bg-brand-light/60 rounded w-1/3" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Empty State Message */}
            <AnimatedSection delay={0.3}>
              <div className="text-center mt-16 py-12 border-t border-brand-light">
                <p className="text-overline mb-3">Stay Tuned</p>
                <h3 className="heading-sub mb-4">New arrivals coming soon</h3>
                <p className="text-body max-w-sm mx-auto mb-8">
                  Our new collection is being carefully curated. Sign up to be the first to know when pieces drop.
                </p>
                <button className="btn-primary">
                  Notify Me
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
