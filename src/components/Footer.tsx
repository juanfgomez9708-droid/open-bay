import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white font-bold text-xl mb-4">{siteConfig.businessName}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-white/80 hover:text-fresh transition-colors"
          >
            {siteConfig.phone}
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white/80 hover:text-fresh transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        <p className="text-white/50 text-sm mb-2">
          Proudly serving {siteConfig.serviceArea}
        </p>
        <p className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
