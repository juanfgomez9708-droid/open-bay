import { siteConfig } from '@/lib/site-config';
import BookingForm from './BookingForm';

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="bg-fresh/5 py-16 md:py-24 px-4 md:px-6"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="booking-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {siteConfig.booking.headline}
          </h2>
          <p className="text-lg text-navy/70">{siteConfig.booking.subhead}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
