'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-light py-16 md:py-24 px-4 md:px-6" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                id={`faq-question-${index}`}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fresh"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-navy text-lg pr-4">{item.q}</span>
                <span className="text-navy/40 flex-shrink-0" aria-hidden="true">
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`px-6 transition-all duration-200 ${
                  openIndex === index ? 'pb-5 max-h-96' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-navy/70 text-lg leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
