import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import ServiceArea from '@/components/ServiceArea';
import Realtors from '@/components/Realtors';
import Testimonials from '@/components/Testimonials';
import BookingSection from '@/components/BookingSection';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <ServiceArea />
      <Realtors />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </main>
  );
}
