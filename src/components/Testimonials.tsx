import { siteConfig } from '@/lib/site-config';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Horizontal scroll on mobile, wrapped grid on desktop */}
        <div className="flex md:flex-wrap md:justify-center gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {siteConfig.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] md:max-w-sm snap-center bg-slate-light rounded-2xl p-6 md:p-8"
            >
              <StarRating count={testimonial.rating} />
              <blockquote className="mt-4 text-navy text-lg leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-navy/60">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
