import { siteConfig } from '@/lib/site-config';
import CheckIcon from './CheckIcon';

export default function Realtors() {
  return (
    <section className="bg-navy py-16 md:py-24 px-4 md:px-6" aria-labelledby="realtors-heading">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 id="realtors-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            {siteConfig.realtors.headline}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {siteConfig.realtors.subhead}
          </p>

          <ul className="space-y-4 mb-10">
            {siteConfig.realtors.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-white/90 text-lg">
                <CheckIcon className="h-5 w-5 text-fresh flex-shrink-0 mt-1" />
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href="/book"
            className="inline-block bg-fresh hover:bg-fresh-dark text-white font-semibold py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2 focus:ring-offset-navy"
          >
            {siteConfig.realtors.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
