import { siteConfig } from '@/lib/site-config';

export default function ServiceArea() {
  return (
    <section className="bg-slate-light py-16 md:py-24 px-4 md:px-6" aria-labelledby="service-area-heading">
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Proudly Serving {siteConfig.serviceArea}
        </h2>
        <p className="text-lg text-navy/70 mb-10">
          Local crews, same-week service — right in your neighborhood.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.towns.map((town) => (
            <span
              key={town}
              className="bg-white text-navy font-medium py-2 px-5 rounded-full shadow-sm text-sm md:text-base"
            >
              {town}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
