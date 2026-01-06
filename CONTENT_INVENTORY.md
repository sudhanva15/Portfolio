# Content Inventory

This document lists user-facing copy keys, current text, and where the text appears in the codebase. Duplicates and near-duplicates are flagged.

---

## hero.introTemplate
- Text: "I'm {name}. I grew up in Kenya, studied communication design in India, and now build calm, explainable analytics systems in the US."
- Appears in:
  - `src/components/hero.tsx` (hard-coded before refactor)
- Notes: Contains the only explicit mention of "Kenya". Per audit rules, Kenya should be mentioned only once across hero/about.

## hero.subhead
- Text: "I help teams turn messy signals into confident product & strategy decisions."
- Appears in:
  - `src/data/profile.ts` (as `profile.headline`) and `src/components/hero.tsx` (used as paragraph under the headline)
- Notes: Centralized to `siteCopy.hero.subhead`.

## hero.badges
- Texts:
  - "MSBA (Analytics) · B.Des (Communication Design)"
  - "Product + Strategy + Design"
  - "F1 OPT-eligible (US)"
- Appears in:
  - `src/components/hero.tsx`

## hero.ctas
- Texts:
  - "View projects" (appears in `src/components/hero.tsx`)
  - "View case studies" (appears in `src/components/hero.tsx`)

## header.siteTitle
- Text: "Sudhanva Kashyap"
- Appears in:
  - `src/components/layout/header.tsx`

## header.nav
- Items: Projects, Case Studies, About
- Appears in:
  - `src/components/layout/header.tsx` (navItems array)

## header.contactLabel
- Text: "Get in touch"
- Appears in:
  - `src/components/layout/header.tsx` (button label)
  - `src/components/contact-card.tsx` references header button in `resumePrompt` text
- Note: Single canonical mailto in header is correct; hero CTA previously duplicated this and has been removed.

## footer.builtLine
- Text: "Built with intention in Rochester, NY."
- Appears in:
  - `src/components/layout/footer.tsx`

## footer.tagline
- Text: "Somewhere between giraffes and dashboards."
- Appears in:
  - `src/components/layout/footer.tsx`
- Note: Keeps playful tone; does not repeat the word "Kenya".

## social.linkedinLabel / contact.linkedinLabel
- Text: "View LinkedIn profile" / "LinkedIn"
- Appears in:
  - `src/components/layout/footer.tsx` (SocialIcon label)
  - `src/components/contact-card.tsx` (LinkedIn contact label)
- Notes: LinkedIn URL canonicalized to `https://www.linkedin.com/in/sudhanvavkashyap/` in `src/data/profile.ts` and referenced in SocialIcon/contact components. Duplicates consolidated.

## ctaStrip items
- Labels & descriptions:
  - "Explore builds" — "Dashboards, scrapers, and behavioral tools that ship and get used." (`src/components/cta-strip.tsx`)
  - "See decision stories" — "Case studies that follow the data from noise to recommendation." (`src/components/cta-strip.tsx`)
  - "Learn how I work" — "A hybrid of design thinking, analytics, and systems-level curiosity." (`src/components/cta-strip.tsx`)

## placeholders
- Hero visual placeholder label:
  - Old text: "Hero visual coming soon" (`src/components/hero-visual.tsx`)
  - New neutral text: "Hero visual placeholder" (centralized)
- Screenshot placeholder label:
  - Old text: "Screenshot coming soon" (`src/components/screenshot-gallery.tsx`, `PlaceholderFrame` default)
  - New neutral text: "Screenshot placeholder" (centralized)
- Notes: Removed "coming soon" phrasing in favor of neutral, credible wording.

## screenshotsHeading
- Text: "Screenshots"
- Appears in:
  - `src/components/screenshot-gallery.tsx` (h2)

## certificationsHeading
- Text: "Certifications"
- Appears in:
  - `src/components/certifications-strip.tsx`

## contact.openToText
- Text: "I am open to full-time Product, Strategy, and Analytics roles (F1 OPT). Send a note and I'll respond within a day."
- Appears in:
  - `src/components/contact-card.tsx` (paragraph)

## contact.resumePrompt
- Text: "Request my latest resume using the Get in touch button in the header."
- Appears in:
  - `src/components/contact-card.tsx`

## howIWork.summary & principles
- Summary and principle titles/descriptions found in `src/data/how-i-work.ts` and now centralized to `siteCopy.howIWork`.

## funFacts
- Multiple items (e.g., "Spent my childhood watching giraffes from the back seat.")
- Appears in `src/data/fun-facts.ts` and used in `src/components/hero.tsx`, `About` pages, and footer (small variants).
- Notes: Rewrote some items to avoid repeating the country name; replaced overt references to places with neutral descriptors like "wildlife destinations" when appropriate.

---

## Duplicates & near-duplicates
- "Get in touch" — button/usage centralized to header. Hero CTA removed to avoid duplicate CTAs.
- LinkedIn labels and URLs — multiple occurrences consolidated to `siteCopy.contact.linkedinUrl` and `siteCopy.social.linkedinLabel`.
- "Coming soon" placeholder phrasing — present in hero and screenshots; replaced across the site with neutral placeholder labels.
- "Kenya" — currently occurs in hero intro only. Solar-system / fun facts were rewritten to avoid repeating the country name; flagged as OK.

---

If you want, I can expand this inventory into a CSV or annotate exact line/column references for each item. 
