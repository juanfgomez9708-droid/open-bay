# Open Bay Garage Cleanouts — Marketing Website

## Quick Start

### Prerequisites
- [Bun](https://bun.sh) (v1.0+) or Node.js (v18+)

### Run Locally
```bash
bun install
bun run dev
# or
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Configuration

ALL business content lives in a single file: `src/lib/site-config.ts`

Edit this file to change:
- Business name, phone, email
- Pricing ($699, custom quote text)
- Hero headline and subhead
- Service area towns
- FAQ questions and answers
- Testimonial placeholders
- Colors (navy/green palette)
- SEO title, description, OG image path

## GoHighLevel Form Setup

The booking form supports two modes:

### Option A: GHL Embed (Recommended)
1. Get your GHL form embed code from GoHighLevel
2. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_GHL_EMBED=<your-ghl-embed-html>
   ```
3. The embed code will render in place of the native form

### Option B: Custom Endpoint (Fallback)
If no GHL embed is set, the form POSTs to a configurable endpoint:
```
NEXT_PUBLIC_BOOKING_ENDPOINT=https://your-api.com/leads
```
If neither env var is set, it defaults to `/api/book` (you'll need a backend for this).

## Swapping Assets

### Logo
Replace files in `public/`:
- `logo.svg` — Horizontal lockup (header)
- `logo-stacked.svg` — Stacked version
- `logo-mono.svg` — Monochrome version
- `favicon.svg` — Browser tab icon
- `apple-touch-icon.svg` — iOS home screen icon

### Before/After Photos
In `src/components/Gallery.tsx`, replace the placeholder divs with `<img>` tags pointing to your images in `public/images/`.

### OG Image
Place your Open Graph image at `public/og-image.jpg` (1200x630px recommended).

## Deploy to AWS Amplify

This project is configured for static export (`output: 'export'` in `next.config.ts`).

1. Push to a GitHub/GitLab repo
2. Connect the repo in AWS Amplify Console
3. Amplify will auto-detect Next.js
4. Build command: `bun run build` (or `npm run build`)
5. Output directory: `out`
6. Set environment variables in Amplify Console if using GHL embed or custom endpoint

### Environment Variables for Production
```
NEXT_PUBLIC_GHL_EMBED=<your-ghl-embed-code>
NEXT_PUBLIC_BOOKING_ENDPOINT=<your-api-endpoint>
```

## Pre-Deploy Checklist

- [ ] Update phone number in `src/lib/site-config.ts`
- [ ] Update email in `src/lib/site-config.ts`
- [ ] Replace placeholder testimonials with real reviews
- [ ] Add real before/after photos to Gallery
- [ ] Add OG image at `public/og-image.jpg`
- [ ] Set up GHL form embed or custom booking endpoint
- [ ] Generate proper `favicon.ico` from `favicon.svg`
- [ ] Generate `apple-touch-icon.png` from `apple-touch-icon.svg`
- [ ] Update domain URL in JSON-LD schema and OG tags
- [ ] Test on mobile device
- [ ] Verify form submission works end-to-end

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deploy:** AWS Amplify (static export)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer, SEO metadata
│   ├── page.tsx            # Landing page (all sections)
│   └── book/page.tsx       # Standalone booking page
├── components/
│   ├── Header.tsx          # Sticky header
│   ├── Hero.tsx            # Hero section
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Pricing.tsx         # $699 pricing card
│   ├── Gallery.tsx         # Before/after photo grid
│   ├── ServiceArea.tsx     # Bergen County towns
│   ├── Realtors.tsx        # B2B section
│   ├── Testimonials.tsx    # Review cards
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── Footer.tsx          # Site footer
│   ├── BookingSection.tsx  # Inline booking on landing page
│   └── BookingForm.tsx     # Form with GHL embed support
└── lib/
    └── site-config.ts      # ALL editable content
```
