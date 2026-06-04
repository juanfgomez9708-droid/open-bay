export const siteConfig = {
  businessName: "Open Bay Garage Cleanouts",
  phone: "(551) 313-9370",
  email: "openbaygaragenj@gmail.com",
  serviceArea: "Bergen County, NJ",
  towns: [
    "Hackensack",
    "Paramus",
    "Ridgewood",
    "Teaneck",
    "Fair Lawn",
    "Bergenfield",
    "Englewood",
    "Fort Lee",
  ],
  pricing: {
    standard: 699,
    standardLabel: "Standard Single-Car Garage Cleanout",
    customNote: "Heavy or full-property loads get a quick custom quote.",
  },
  hero: {
    headline: "Your garage, emptied — flat $699",
    subhead:
      "Full garage cleanouts in Bergen County. We haul everything — you do nothing.",
    cta: "Get a Free Quote",
    trustBadges: ["Insured", "Same-Week", "Bergen County Local"],
  },
  howItWorks: [
    {
      step: 1,
      title: "Text Us a Photo",
      description: "Send a photo of your garage. That's it.",
    },
    {
      step: 2,
      title: "Get a Flat Price",
      description: "We'll text you a flat price within the hour.",
    },
    {
      step: 3,
      title: "We Haul It All",
      description:
        "We show up, clear everything out, and leave it clean.",
    },
  ],
  faq: [
    {
      q: "How much does it cost?",
      a: "A standard single-car or lightly full garage is a flat $699. Heavier loads or full-property cleanouts get a quick custom quote — just send us a photo.",
    },
    {
      q: "What do you take?",
      a: "Everything non-hazardous: furniture, boxes, tools, junk, old appliances, sports equipment, holiday decorations — all of it.",
    },
    {
      q: "What don't you take?",
      a: "Hazardous materials (paint, chemicals, propane tanks), and items requiring special disposal like asbestos.",
    },
    {
      q: "How fast can you come?",
      a: "We offer same-week service. Most jobs are scheduled within 2-3 days of your quote.",
    },
    {
      q: "Are you insured?",
      a: "Yes, fully insured. Your property is protected.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Cash, credit/debit cards, Venmo, and Zelle.",
    },
    {
      q: "Do I need to be home?",
      a: "We prefer it, but as long as we have garage access, we can handle it.",
    },
  ],
  realtors: {
    headline: "For Realtors & Investors",
    subhead: "Pre-listing and pre-close cleanouts. Same-week turnaround.",
    bullets: [
      "Pre-listing cleanouts to stage faster",
      "Pre-close junk removal for smooth transactions",
      "Same-week turnaround — never delay a closing",
      "Custom property quotes for multi-unit or estate work",
    ],
    cta: "Become a Preferred Partner",
  },
  includedItems: [
    "Full garage cleanout",
    "All hauling & disposal",
    "Same-week scheduling",
    "Broom-clean finish",
  ],
  testimonials: [
    {
      name: "Sarah M.",
      location: "Ridgewood, NJ",
      text: "We had 15 years of stuff piled to the ceiling. They showed up at 8am, and by lunch my garage was completely empty and swept clean. I still can't believe it.",
      rating: 5,
    },
    {
      name: "Mike D.",
      location: "Paramus, NJ",
      text: "Texted them a photo, got a flat price in 20 minutes, and they came two days later. No hidden fees, no haggling. Exactly what they quoted.",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      location: "Teaneck, NJ",
      text: "I'd been putting this off for months because I thought it would be a nightmare. Took them half a day — old furniture, boxes, broken appliances, all gone. Wish I'd called sooner.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      location: "Hackensack, NJ",
      text: "Used them for a pre-listing cleanout on a property I was selling. Buyer walked in to a spotless two-car garage. Closed on time. Will use again.",
      rating: 5,
    },
    {
      name: "Linda K.",
      location: "Fair Lawn, NJ",
      text: "After my mom passed, we had a garage full of decades of stuff. They were respectful, efficient, and even set aside things they thought we might want to keep. Really thoughtful crew.",
      rating: 5,
    },
  ],
  seo: {
    title: "Garage Cleanout Bergen County NJ | Flat $699 | Open Bay",
    description:
      "Full garage cleanouts in Bergen County, NJ. Flat $699 pricing, same-week service, fully insured. Text us a photo for an instant quote.",
    ogImage: "/og-image.jpg",
  },
  booking: {
    headline: "Get Your Free Quote",
    subhead:
      "Upload a photo of your garage and we'll text you a flat price within the hour.",
    successMessage:
      "Got it! We'll text you shortly with your flat price.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
