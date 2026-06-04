import { siteConfig } from '@/lib/site-config';

const stepIcons = [
  // Camera icon
  <svg key="camera" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Dollar sign icon
  <svg key="dollar" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>,
  // Truck icon
  <svg key="truck" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>,
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6" aria-labelledby="how-it-works-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-navy text-center mb-12 md:mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.howItWorks.map((step, i) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              {/* Step number circle with icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-fresh/10 flex items-center justify-center text-fresh">
                  {stepIcons[i]}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-fresh text-white text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-lg text-navy/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
