import { siteConfig } from '@/lib/site-config';
import CheckIcon from './CheckIcon';

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[70vh] flex items-center bg-navy bg-gradient-to-br from-navy via-navy-light to-navy"
      aria-label="Hero"
    >
      {/* Subtle texture overlay — swap for background image when available */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {siteConfig.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {siteConfig.hero.subhead}
        </p>
        <a
          href="#booking"
          className="inline-block bg-fresh hover:bg-fresh-dark text-white font-semibold text-lg py-4 px-10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2 focus:ring-offset-navy"
        >
          {siteConfig.hero.cta}
        </a>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          {siteConfig.hero.trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-white/90 text-sm md:text-base"
            >
              <CheckIcon />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
