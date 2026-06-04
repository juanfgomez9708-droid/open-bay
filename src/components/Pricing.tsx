import { siteConfig } from '@/lib/site-config';
import CheckIcon from './CheckIcon';

export default function Pricing() {
  return (
    <section className="bg-slate-light py-16 md:py-24 px-4 md:px-6" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Simple, Flat Pricing
        </h2>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <p className="text-navy/60 text-sm font-medium uppercase tracking-wide mb-2">
            {siteConfig.pricing.standardLabel}
          </p>
          <div className="flex items-baseline justify-center gap-1 mb-8">
            <span className="text-2xl font-bold text-navy">$</span>
            <span className="text-6xl md:text-7xl font-bold text-navy">{siteConfig.pricing.standard}</span>
          </div>

          <ul className="space-y-4 mb-8 text-left">
            {siteConfig.includedItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-navy/80 text-lg">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            className="inline-block w-full bg-fresh hover:bg-fresh-dark text-white font-semibold py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2"
          >
            Get a Free Quote
          </a>

          <p className="mt-6 text-sm text-navy/50">{siteConfig.pricing.customNote}</p>
        </div>
      </div>
    </section>
  );
}
