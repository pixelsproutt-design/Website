# Pixel Sprout — Build Spec (MVP Scope, Homepage Only)

**READ THIS FIRST — SCOPE LOCK**
This is a time-boxed build. Build EXACTLY what is specified below. Do not add sections, pages, features, or animations that are not explicitly listed, even if they seem like natural additions. If something is ambiguous, choose the simplest implementation that satisfies the written spec rather than inventing new behavior. Do not invent copy beyond what is marked PLACEHOLDER below — use the placeholder text as-is if final copy isn't supplied.

**IN SCOPE (build these, nothing else):**
- One page: Homepage (`/`), containing all 6 sections listed below
- Persistent nav bar and footer
- A "Get Quote" modal/form
- Stub, non-functional links for Services/About/Blog/Case Studies/Contact (see Nav spec)

**OUT OF SCOPE (do NOT build any of this):**
- Do not build `/services/design`, `/services/build`, `/services/growth` or any service sub-pages
- Do not build the ExpandOnHover ("expand ✕ hover") panel component
- Do not build About, Blog, or Case Studies pages
- Do not build a camera-pan-into-each-branch effect — use the simplified fade/reveal specified in Section 3 instead
- Do not add a fruit/case-study visual, a seed/blog visual, or a mini-tree breadcrumb — these were explicitly cut
- Do not add analytics, CMS integration, backend/database, or auth — the Get Quote form only needs to visually submit (log to console or show a success state; no backend required for this build)

---

## 1. Tech Stack (use exactly this — do not substitute)
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger plugin for all scroll-linked animation
- No other animation library (no Framer Motion, no Lottie, no anime.js) — GSAP only, to avoid mixing animation engines
- Deploy target: Vercel (assume standard `next build` compatibility)

## 2. Design Tokens (use these exact values — do not generate alternate colors)
```css
--color-loam: #F3F1E9;      /* primary background */
--color-deep-sprout: #242E2B; /* primary text, footer bg */
--color-sprout-green: #4FAF6D; /* primary accent, buttons */
--color-leaf-green: #8FBE82;   /* secondary accent */
--color-pale-sage: #A1BAB1;    /* muted text, borders */
--color-canopy-gold: #D6A85F;  /* CTA highlight, used sparingly */
```
Typography: use a clean geometric sans-serif for headings (e.g. system default or Inter as a safe fallback if no font file is supplied) and a standard sans-serif for body text. Do not source or license a custom font — use a freely available Google Font if one is needed (Inter or Poppins).

Logo: a placeholder text wordmark "PIXEL SPROUT" plus a simple inline SVG line-icon (two leaf shapes over a rounded square outline) should be built as a basic placeholder SVG component — do not attempt to source or recreate the actual brand logo file pixel-for-pixel. This will be swapped with the real logo file later.

## 3. Page Structure — Homepage (single scrolling page, one route: `/`)

### 3.0 Persistent Nav Bar
- Fixed/sticky top, full width
- Left: logo icon + "PIXEL SPROUT" wordmark
- Right: text links — Services, About, Blog, Case Studies, Contact (all `<a href="#">` stub links, non-functional, `onClick` prevents default — do not throw errors, do not attempt to route anywhere)
- Right-most: a solid pill button "Get Quote" in Sprout Green — this ONE nav element IS functional: clicking it opens the Get Quote modal (see Section 3.5)
- Background: transparent over hero, becomes solid Loam background with subtle bottom border once scrolled past the hero (scroll position > 100vh)

### 3.1 Section 1 — Hero (100vh)
- Background: Loam (`--color-loam`)
- On page load (not scroll-triggered — a one-time entrance animation on mount):
  1. Nav bar fades/slides in (0.4s)
  2. A small circular "seed" element animates from the nav logo's position, arcing down to the bottom-left of the viewport (0.6s, ease power2.out)
  3. On landing, the seed morphs (simple scale + opacity crossfade is sufficient — no complex SVG morph needed) into a small sprout icon (reuse the placeholder logo icon SVG, ~40px)
  4. AT THE SAME TIME as steps 2-3 (not after), the headline text fades/slides up into view
- Headline copy (PLACEHOLDER — replace with final copy when available):
  - H1: "We Grow Your Business Into a Tree"
  - Subhead: "A design and build studio that helps ideas take root and grow."
- No CTA button in this section.
- The sprout icon element must have a stable, addressable DOM position/ref — Section 3.2 depends on animating this exact same element.

### 3.2 Section 1→2 Transition — Sprout to Plant (ScrollTrigger, pinned, scroll range: 0–100vh of a pinned 150vh trigger section)
- The SAME sprout element from the hero (do not create a new element) animates via a single GSAP timeline scrubbed to scroll (`scrub: true`):
  - `x` and `y`: from bottom-left position to horizontal+vertical center of viewport
  - `scale`: from small (e.g. 0.4) to larger (e.g. 1.2)
  - These properties animate on the SAME timeline, same scroll range — not two separate timelines, not sequential `.then()` calls. One `gsap.timeline({scrollTrigger: {scrub: true, ...}})` with all properties tweened together.
- At the end of this scroll range, cross-fade the sprout icon SVG to a slightly more developed "small plant" SVG (stem + 2 base leaves) — a simple opacity crossfade between two pre-built SVGs is acceptable; do not attempt a true path-morph animation (too time-expensive for this build).
- Hero headline: fades out (opacity to 0) over the first half of this same scroll range.

### 3.3 Section 2 — Services (pinned section, 3 sequential reveals — SIMPLIFIED from the original camera-pan concept)
- The plant SVG (from 3.2) is now sitting at center with 3 branch line-elements extending from it, one per category, pre-drawn (not animated in via SVG draw — a simple `strokeDashoffset` reveal per branch tied to scroll IS acceptable and recommended, since it's low-complexity and reads well)
- Layout: as the user scrolls through this pinned section, reveal branches one at a time in sequence (NOT all-at-once, NOT a true camera pan/zoom — just: branch fades/draws in, its label+pitch text fades in beside it, then branch 2 does the same, then branch 3):
  - Branch 1 — "Design" — color: `--color-sprout-green` — pitch (PLACEHOLDER): "Brand identity and UI/UX that make people stop scrolling."
  - Branch 2 — "Build" — color: `--color-leaf-green` — pitch (PLACEHOLDER): "From first line of code to full product launch."
  - Branch 3 — "Growth" — color: `--color-canopy-gold` — pitch (PLACEHOLDER): "SEO, content, and campaigns that compound."
- Each branch's label/pitch text should be a simple `opacity` + small `y` translate fade-in, scrubbed to its portion of the scroll range. Do not attempt a blur/desaturate-the-other-branches effect — skip that polish detail for this build.

### 3.4 Section 3 — Roots / Process (normal scroll-in section, NOT pinned — standard reveal-on-enter is fine here, use `ScrollTrigger` with `toggleActions: "play none none reverse"`, not `scrub`)
- 5 items in a horizontal row (stack vertically on mobile), each fading/sliding in with a slight stagger (0.1s delay between each) as the section enters the viewport:
  1. Audit
  2. Offer / Demo
  3. Build
  4. Payment
  5. Deploy & Handover
- Each item: a short label (bold) + one line of supporting placeholder text (PLACEHOLDER, write a generic one-line description per step, e.g. "Audit — We assess where your business stands today.")
- No progress bar, no percentage indicator.

### 3.5 Section 4 — Full Tree / CTA (standard reveal-on-enter, not pinned)
- A full tree SVG placeholder (can reuse/scale up the plant SVG from 3.2 — do not build a separate bespoke "mature tree" illustration, that's too time-expensive; a scaled, fuller version of the same plant graphic is acceptable for this build)
- Centered "Get Quote" button, Sprout Green, pill-shaped
- Supporting line above button (PLACEHOLDER): "Ready to grow? Tell us about your business."
- Clicking "Get Quote" (from here OR from the nav bar) opens a modal with this form:
  - Name (text input, required)
  - Email (email input, required)
  - Business Type (text input, required)
  - Project Details (textarea, optional)
  - Submit button
  - On submit: prevent default, show a simple success message inside the modal ("Thanks — we'll be in touch."). Do NOT wire up a real backend/email service for this build — a console.log of form values on submit is sufficient.
  - Modal must have a visible close button (X) and close on backdrop click.

### 3.6 Section 5 — Footer
- Background: `--color-deep-sprout`, text in `--color-loam` or `--color-pale-sage`
- Left: logo + tagline "Where Businesses Take Root"
- Middle: stub links (Services, About, Blog, Case Studies, Contact, Privacy Policy, Terms) — same non-functional stub behavior as nav
- Right: contact placeholder text (PLACEHOLDER: "hello@pixelsprout.com")
- No social icons needed unless trivial to add — do not spend time sourcing icon assets; text links are sufficient.

## 4. Explicit Ambiguity Resolution Rules
If you (the coding agent) encounter a decision not covered above, resolve it using these rules, in order:
1. Prefer the simplest working implementation over a visually elaborate one.
2. Prefer using one of the two pre-built SVGs (seed/sprout icon, plant/branch graphic) already described, scaled or recolored, over generating a new illustration.
3. Never add a new page, route, or nav destination beyond what's listed in Section 3.0.
4. Never add copy beyond the PLACEHOLDER text given — if more text is structurally needed, duplicate/shorten the nearest placeholder rather than inventing new marketing copy.
5. If a GSAP/ScrollTrigger effect described here is not achievable within a reasonable implementation, degrade gracefully to a simple fade/slide reveal rather than attempting a complex workaround.

## 5. Definition of Done
- `npm run dev` runs with no console errors
- All 6 sections render in order on one scrolling homepage
- Sprout hero animation and the 3-branch reveal both respond to scroll (scrubbed, reversible on scroll-up)
- Get Quote modal opens from both nav and Section 4, accepts input, and shows a success state on submit
- Site is responsive down to mobile width (375px) without broken layout
- No unused/broken stub links throw runtime errors
