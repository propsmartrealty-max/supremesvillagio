"use client";

import React from 'react';

export default function PressSection() {
  return (
    <section className="py-14 md:py-20 bg-charcoal border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-gold/80 uppercase tracking-[0.25em] text-xs font-semibold mb-10">
          Recognized For Architectural Excellence In Leading Publications
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 text-cream/60">
          {/* The Economic Times */}
          <div className="flex items-center gap-2 hover:text-cream transition-colors duration-300" title="The Economic Times">
            <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 240 32" role="img" aria-label="The Economic Times">
              <text x="50%" y="22" textAnchor="middle" fontFamily="Georgia, serif" fontSize="19" fontWeight="bold" letterSpacing="2">
                THE ECONOMIC TIMES
              </text>
            </svg>
          </div>

          {/* The Times of India */}
          <div className="flex items-center gap-2 hover:text-cream transition-colors duration-300" title="The Times of India">
            <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 240 32" role="img" aria-label="The Times of India">
              <text x="50%" y="22" textAnchor="middle" fontFamily="'Times New Roman', Times, serif" fontSize="20" fontWeight="bold" letterSpacing="2">
                THE TIMES OF INDIA
              </text>
            </svg>
          </div>

          {/* Moneycontrol */}
          <div className="flex items-center gap-2 hover:text-cream transition-colors duration-300" title="Moneycontrol">
            <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 190 32" role="img" aria-label="Moneycontrol">
              <text x="50%" y="22" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="21" fontWeight="700" letterSpacing="-0.5">
                moneycontrol
              </text>
            </svg>
          </div>

          {/* Hindustan Times */}
          <div className="flex items-center gap-2 hover:text-cream transition-colors duration-300" title="Hindustan Times">
            <svg className="h-6 md:h-7 w-auto fill-current" viewBox="0 0 210 32" role="img" aria-label="Hindustan Times">
              <text x="50%" y="22" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" letterSpacing="0.5">
                Hindustan Times
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
