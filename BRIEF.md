# MJV Realty — Interactive Demo Brief

## Goal
Create and publish a premium, animated, mobile-responsive Spanish-first real-estate website for Maritza Vicente / MJV Realty in Puerto Rico. This is a sales demo, not the client's final production system.

## Known public references
- Facebook: https://www.facebook.com/mvicente?locale=es_LA
- Instagram: https://www.instagram.com/mjv.realty/
- TikTok: https://www.tiktok.com/@mjv.realty
- Public profile scraping was blocked/insufficient, so do not invent a legal name, brokerage, license number, contact number, testimonials, or sales history.
- Vapi contains an existing assistant named `Maritza Vicente - Demo`, assistant ID `0af4f756-17d6-4018-8fa9-9780c97f5728`. Its current prompt is a blank template and it has no verified calendar tools yet.

## Product concept
A high-end MJV Realty listing experience where visitors can browse Puerto Rico properties, filter them, inspect rich property galleries/video, and tap `Llámame ahora` from any listing. The call experience demonstrates a 24/7 bilingual AI concierge that discusses the specific property and can collect preferred tour times. Do not claim that a real Google Calendar booking has occurred unless a real booking tool confirms it.

## Visual direction
Luxury Caribbean editorial aesthetic: warm ivory, near-black, muted sand, subtle sea-glass accent. Sophisticated serif display + clean sans body. Large property photography, restrained microinteractions, tasteful scroll reveals, premium transitions, no generic blue SaaS look. MJV monogram is acceptable as a temporary demo mark.

## Functional requirements
- Spanish-first UI, optional English language toggle.
- Home page with animated hero, proof/value section, featured listings, neighborhoods, how 24/7 concierge works, agent introduction, final CTA, footer/social links.
- At least 6 fictional demo listings across Puerto Rico with clearly visible `Propiedad de demostración` labels and varied sale/rent pricing.
- Search/filter/sort for listing type, municipality, bedrooms, and price.
- Property detail modal or route with gallery, specs, amenities, map-style location panel, video-tour placeholder/control, and contextual call CTA.
- Every listing CTA opens a working call assistant panel. If Vapi web credentials are absent, present an honest interactive demo fallback that simulates connection states and lets a user submit preferred tour details locally; never claim a calendar event was created.
- Contact/consultation form should validate and display a local success state; no fake network submission.
- Buttons and nav links must work; keyboard navigation and reduced-motion support required.
- Fast, responsive, accessible; avoid horizontal overflow at mobile widths.
- Use remote royalty-free Unsplash images with meaningful alt text and `images.unsplash.com` URLs; no scraped listing photos or false attribution.
- Include a discreet `Demo conceptual — propiedades ficticias` disclosure.

## Technical direction
- Next.js + TypeScript + Tailwind (or equivalent modern React stack).
- Use Framer Motion sparingly for motion.
- Structure listings as data so a CMS/API can replace them later.
- Prepare an optional Vapi client integration gated by environment variables; no secret keys committed.
- Deployment target: Vercel, using existing authenticated CLI if available.

## Definition of done
- npm install succeeds.
- lint/typecheck/build pass.
- local browser smoke test confirms navigation, filters, property details, CTA/modal, form validation, no console errors.
- production deployment returns a public HTTPS URL.
- deployed site is smoke-tested at desktop and mobile widths.
