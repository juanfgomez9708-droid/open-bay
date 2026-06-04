import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import BookingSection from '@/components/BookingSection';

export const metadata: Metadata = {
  title: 'Book a Garage Cleanout | Open Bay',
  description: siteConfig.booking.subhead,
};

export default function BookPage() {
  return (
    <main className="bg-slate-light min-h-screen">
      <BookingSection />
    </main>
  );
}
