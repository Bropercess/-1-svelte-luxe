'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function CartPage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="section-padding pt-12 pb-6 md:pt-16 md:pb-8">
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <h1 className="heading-section">Shopping Bag</h1>
            <span className="text-body-sm">0 items</span>
          </div>
        </AnimatedSection>
      </section>

      <div className="section-padding pb-24 md:pb-36">
        <div className="border-t border-brand-light" />

        {/* Empty Cart State */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-center py-24 md:py-36">
            {/* Empty Bag Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-24 h-24 text-brand-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <h2 className="heading-sub mb-3">Your cart is empty</h2>
              <p className="text-body max-w-sm mx-auto mb-10">
                Looks like you haven&apos;t added anything to your bag yet.
                Discover our curated collection of premium gym wear.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/collection" className="btn-primary">
                  Continue Shopping
                </Link>
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Cart Layout Preview (shown as faded UI) */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto mt-8 opacity-30 pointer-events-none select-none">
            <div className="border-t border-brand-light pt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-ultra-wide uppercase font-light text-brand-gray">
                  Order Summary
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-light text-brand-gray">Subtotal</span>
                  <span className="text-xs font-light">$0.00</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-light text-brand-gray">Shipping</span>
                  <span className="text-xs font-light text-brand-silver">Calculated at checkout</span>
                </div>
                <div className="border-t border-brand-light pt-4 flex items-center justify-between">
                  <span className="text-sm font-light tracking-wider">Total</span>
                  <span className="text-sm font-light tracking-wider">$0.00</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="w-full py-4 bg-brand-light/50 text-center">
                  <span className="text-[11px] tracking-ultra-wide uppercase font-light text-brand-silver">
                    Proceed to Checkout
                  </span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-brand-light/50">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-5 h-5 mx-auto mb-1 text-brand-silver">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  <span className="text-[9px] tracking-widest uppercase text-brand-silver">Secure</span>
                </div>
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-5 h-5 mx-auto mb-1 text-brand-silver">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span className="text-[9px] tracking-widest uppercase text-brand-silver">Free Ship</span>
                </div>
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-5 h-5 mx-auto mb-1 text-brand-silver">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                  </svg>
                  <span className="text-[9px] tracking-widest uppercase text-brand-silver">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
