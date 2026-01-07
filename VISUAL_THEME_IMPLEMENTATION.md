# Visual Theme Implementation Summary

## Theme Duality: Space (Dark) + Wireframe (Light)

### Dark Mode: Space Theme
**Motif:** Calm cosmos, mission control, data scouting

**Background Implementation:**
- Deep black base (#050505)
- Subtle blue and purple radial gradients (3% and 2% opacity) for atmospheric depth
- 8-layer starfield using CSS radial gradients:
  - 1px stars with varying opacity (0.08–0.15)
  - Randomized positioning via background-position offsets
  - Different pattern sizes (300px–450px) for depth parallax
- Motion-safe animations throughout (respects prefers-reduced-motion)

**Visual Elements:**
- Orbit rings in SolarSystem component with slow rotation (40s, 60s, 80s)
- Pulsing accent stars (blue, purple, green, yellow, pink) in SolarSystem
- Subtle vignette on large screens (gradient overlay, pointer-events-none)
- Card shadows remain visible for depth perception

**Files Modified:**
- `src/app/globals.css` - Dark body background with starfield
- `src/app/layout.tsx` - Vignette overlay div
- `tailwind.config.ts` - Added bg-gradient-radial utility
- `src/components/solar-system.tsx` - Already had orbit animation

---

### Light Mode: Wireframe Newsletter Theme
**Motif:** Clean specification sheet, raw blueprint, structured documentation

**Background Implementation:**
- Warm off-white base (#fafaf9)
- Subtle 32×32px grid pattern using linear gradients (2% opacity)
- Grid visible on both horizontal and vertical axes
- Creates "newsletter" or "spec sheet" aesthetic without overwhelming content

**Visual Elements:**
- Minimal shadows (shadow-sm throughout)
- Card borders remain crisp and visible
- Grid provides subtle structure without competing with content
- Clean, documentation-focused presentation

**Files Modified:**
- `src/app/globals.css` - Light body background with grid pattern

---

## Image Caption System

### Data Model Updates

**Project Type (`src/data/projects.ts`):**
```typescript
heroImage?: {
  src: string;
  alt: string;
  caption?: string; // NEW
};
gallery?: {
  src: string;
  alt: string;
  caption?: string; // NEW
}[];
```

**Case Study Type (`src/data/case-studies.ts`):**
```typescript
heroImage?: {
  src: string;
  alt: string;
  caption?: string; // NEW
};
secondaryImage?: {
  src: string;
  alt: string;
  caption?: string; // NEW
};
```

### Component Updates

**ScreenshotGallery (`src/components/screenshot-gallery.tsx`):**
- Added `caption?: string` to GalleryImage interface
- Wrapped each gallery item in `space-y-3` container
- Renders centered italic caption below image when present
- Caption styling: `text-center text-sm italic text-gray-600 dark:text-gray-400`

**Project Detail Page (`src/app/projects/[slug]/page.tsx`):**
- Wrapped hero image in `<>` fragment
- Added conditional caption rendering below hero image
- Caption styling: `text-center text-sm italic text-gray-600 dark:text-gray-400`

**Case Study Detail Page (`src/app/case-studies/[slug]/page.tsx`):**
- Added caption support for both hero and secondary images
- Hero caption uses same styling as projects
- Secondary caption uses slightly smaller text: `text-xs italic`

---

## Ready for Real Screenshots

### Placeholder → Real Image Workflow

1. **Drop real images:**
   ```
   /public/images/projects/<slug>/
   /public/images/case-studies/<slug>/
   ```

2. **Update data files:**
   ```typescript
   heroImage: {
     src: "/images/projects/invest-ai/hero.webp",
     alt: "Invest_AI portfolio allocation dashboard showing 7-ETF optimized portfolio",
     caption: "Risk-adjusted allocation with explainable trade-offs (Dec 2025)"
   }
   ```

3. **Caption Guidelines:**
   - Keep under 100 characters for readability
   - Use parenthetical dates for time context
   - Focus on "what am I seeing?" clarity
   - Avoid redundancy with alt text (alt = accessibility, caption = context)

### Example Caption Patterns

**Good:**
- "Final prototype after 3 usability rounds (May 2025)"
- "SQL output showing 340k beneficiaries filtered by eligibility"
- "Before/after dashboard comparison—attention-informed redesign"

**Avoid:**
- "Screenshot of the app" (obvious, no context)
- Repeating the project title verbatim
- Technical jargon without explanation

---

## Verification

**Lint:** ✅ Clean (no errors, no warnings)
**Build:** ✅ Successful (14 routes, all SSG)

**Routes Generated:**
- `/` (Home)
- `/about`
- `/projects` + 4 project slugs
- `/case-studies` + 3 case study slugs

---

## Design Principles Maintained

✅ Generous whitespace preserved  
✅ Soft shadows consistent (shadow-sm → shadow-md on hover)  
✅ Rounded cards (rounded-2xl standard)  
✅ Subtle motion (hover -translate-y-1, ≤200ms duration)  
✅ Motion-safe everywhere (respects prefers-reduced-motion)  
✅ Desktop-only animations where appropriate  
✅ Light/dark parity maintained  
✅ No gradients in UI elements (only in backgrounds)  
✅ Calm, premium tone throughout

---

## Next Steps for Content

1. **Remove repetition** (Kenya→India→US journey, contact details)
2. **Add real screenshots** to `/public/images/`
3. **Write captions** for each image in data files
4. **Update alt text** to be screenshot-specific
5. **Test theme** in both light and dark modes across devices
