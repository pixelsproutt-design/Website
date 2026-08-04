# Pixel Sprout — Website PRD

**Tagline:** Where Businesses Take Root
**Site Goal:** Lead generation via a "Get Quote" flow

---

## 1. Brand Reference

| Element | Detail |
|---|---|
| Name | Pixel Sprout |
| Tagline | "Where Businesses Take Root" |
| Logo | Sprout/leaf icon growing out of a rounded square pot outline. **Current file is JPG — a vector/SVG version is required** before build, since JPG cannot be cleanly scaled, recolored, or morphed for the growth animation. |

**Color Palette**

| Name | Hex |
|---|---|
| Deep Sprout | `#242E2B` |
| Sprout Green | `#4FAF6D` |
| Leaf Green | `#8FBE82` |
| Loam (Warm Ivory) | `#F3F1E9` |
| Pale Sage | `#A1BAB1` |
| Canopy Gold | `#D6A85F` |

---

## 2. Core Concept

The site tells one continuous story: **a business grows like a tree** — starting as a seed/sprout, maturing into a plant with branches (services), developing roots (process), and becoming a full tree (the mature, trusted agency).

The **Homepage** carries the full cinematic scroll story. Growth stage is a direct function of scroll position (reference: animejs.com's ScrollObserver `sync` mode — scroll a little, it grows a little; stop scrolling, it stops; scroll up, it reverses).

**All other pages** (Services branches, About, Contact, etc.) are separate, traditionally-routed, SEO-indexable pages that fully render their own complete state on direct load. This was a deliberate trade-off — chosen over a fully continuous shared-element/single-page-app navigation model — specifically to protect SEO, direct linking, and page load speed. Only the homepage carries the full animated narrative.

---

## 3. Site Structure

1. **Homepage** — full animated scroll story
2. **Services** — 3 branch pages, each SEO-indexable:
   - `/services/design`
   - `/services/build`
   - `/services/growth`
   - Each branch page links out to its individual service pages
3. **About**
4. **Portfolio / Case Studies** *(deferred — content to be finalized later)*
5. **Blog / Resources** *(deferred — page exists in nav for later, no content at launch)*
6. **Contact / Request a Quote**

**Persistent top navigation bar** (present on every page): Logo, Services, About, Blog, Case Studies, Contact, Get Quote.

**No legal pages** (Privacy Policy / Terms) exist yet — not being created at this stage.

---

## 4. Services & Branches

9 services total, organized into 3 branches. (Note: an earlier "Ongoing Care Plans/Retainers" service was removed as a standalone offering — nearly all clients engage via retainer regardless of service, so it didn't make sense as its own line item.)

### Branch: Design

**Brand Identity / Logo Design**
- Pitch: *"A visual identity that makes your business instantly recognizable — and impossible to confuse with anyone else."*
- Included: Logo design (primary + variations/lockups), color palette, typography system, brand guidelines document, business card/stationery design, social media kit/templates
- Process: Standard company process (see Section 6)

**UI/UX Design**
- Pitch: *"Interfaces people actually enjoy using — designed around how they think, not just how it looks."*
- Included: User research/discovery, wireframes (low-fidelity), high-fidelity UI design (screens/mockups), interactive prototype, design system/component library, usability testing/iteration
- Process: Standard company process

### Branch: Build

**Web Design & Development**
- Pitch: *"Fast, modern websites built to convert — not just to look good in a portfolio."*
- Included: Custom website design (not template-based), responsive development (mobile/tablet/desktop), CMS integration (if needed), basic on-page SEO setup, performance optimization, hosting/domain setup assistance, post-launch bug-fix window
- Process: Standard company process

**Full-Stack Product Design**
- Pitch: *"From first wireframe to shipped product — design and engineering working as one team."*
- Framing: The combined, end-to-end package (strategy + design + full development, one team, one contract) — distinct from the standalone Design and Build services.
- Included: Product strategy & discovery, UX/UI design (full product), frontend development, backend/API development, database architecture, deployment & infrastructure setup
- Process: Standard company process

**MVP / Startup Builds**
- Pitch: *"Get your idea into real users' hands — fast, functional, and built to evolve."*
- Included: Rapid prototyping/lean scoping, core feature build only (no bloat), frontend + backend development, basic infrastructure/hosting setup, investor-ready demo build, roadmap for post-MVP scaling
- Process: Standard company process

**Custom AI Automations**
- Pitch: *"We build the AI systems that quietly handle the work your team shouldn't have to."*
- Included: Workflow/process audit, custom AI agent/automation build, integration with existing tools (CRM, sheets, email, etc.), testing & refinement, documentation/handover, initial monitoring period
- **Billing model: monthly retainer**, not one-off project pricing
- Process: Standard company process

### Branch: Growth

**SEO / AEO / GEO**
- Pitch: *"Get found — by search engines, AI assistants, and the people actually looking for you."*
- Included: Technical SEO audit, on-page optimization, keyword/content strategy, AEO optimization (structured data, answer-focused content for AI assistants), GEO optimization (visibility in AI-generated/generative search), monthly reporting
- Process: Standard company process

**Content Strategy & Copywriting**
- Pitch: *"Words that sound like you, written to actually move people to act."*
- Included: Brand voice/tone definition, website copywriting, content calendar/strategy, blog/article writing, social media copy, SEO-aligned content writing
- Process: Standard company process

**Marketing Campaign**
- Pitch: *"Campaigns built around a goal, not just a calendar of posts."*
- Scope note: Campaigns and analysis only — **no SMM or content creation** included in this service.
- Included: Campaign strategy & goal-setting, paid campaign execution (ads across channels), performance tracking & reporting, post-campaign analysis
- Process: Standard company process

**Note:** No individual service page repeats the process — it's shown once, on the homepage roots section, and applies identically to all 9 services.

---

## 5. Branch Page Pattern

- Each branch page (`/services/design`, `/services/build`, `/services/growth`) is a dedicated, indexable route — chosen specifically for SEO crawlability and direct linkability.
- Individual services within a branch page use an **"ExpandOnHover" panel pattern** (reference: [skiper-ui.com/v1/skiper52](https://skiper-ui.com/v1/skiper52)) — panels sit side by side; hovering/clicking one expands it to reveal detail while the others compress to a narrow strip.
  - Example: the Build branch page shows 4 panels (Web Dev, Full-Stack Product Design, MVP/Startup Builds, Custom AI Automations).

---

## 6. Company Process (Public-Facing)

Shown once, on the homepage roots section:

**Audit / Understanding business need → Offer + demo of the outcome → Build → Payment → Deploy & Handover**

**Internal payment split (NOT published publicly):**
- 30% advance after the demo call
- 30% more once the product is built and ready to deploy
- Remaining 40% due post-deployment, before handover

---

## 7. Homepage — Animation Flow

Reference mechanic: animejs.com's ScrollObserver `sync` mode — growth is a direct function of scroll position.

**Stage 0 — Page Load**
- Background: Loam (`#F3F1E9`)
- Top nav bar appears: Logo (left), nav links (right)
- A seed detaches from the nav logo, falls to the bottom-left corner, morphs into a small static sprout mark
- Simultaneously, the hero headline animates in
- **Hero copy (locked):**
  - Headline: **"Where Businesses Take Root."**
  - Subheadline: **"From first sketch to scaled product — we grow with you at every stage."**
  - CTA button: **"Plant Your Idea"**

**Stage 1 — Sprout → Plant (~scroll 0–20%)**
- Sprout's position (bottom-left → center) and scale (growing) animate together as one continuous motion — not sequential steps
- Stem lengthens, first leaves appear as it travels
- Scroll up = reverses; scroll stops = motion stops in place
- End state: small plant at center, stem and base leaves formed, no branches yet

**Stage 2 — Services: 3 Branches (~scroll 20–50%)**
- Plant sprouts 3 color-coded branches: Design / Build / Growth
- Camera pans into each branch in turn (in focus, others recede/blur), showing its short pitch/label
- Entirely automatic on scroll — no clicking needed to see all 3 during the homepage scroll
- End state: camera pulls back to show the full plant with all 3 branches visible

**Stage 3 — Roots: Process (~scroll 50–70%)**
- Roots grow beneath/around the base, extending deeper with scroll
- 5 process steps appear in sequence as the root reaches that point: **Audit → Offer/Demo → Build → Payment → Deploy & Handover** (no percentages shown)

**Stage 4 — Full Mature Tree (~scroll 70–90%)**
- Full tree shown: trunk, canopy, branches, roots together
- **"Plant Your Idea" / Get Quote button** appears here (opens the quote form — see Section 9)
- No gallery, no other competing content in this section

**Stage 5 — Footer (~scroll 90–100%)**
- Soil/root-textured background
- Contact details, sitemap links, legal links (none currently exist)
- Static resting end state, no further scroll-linked animation

**Persistent throughout:** top nav bar stays accessible so visitors can leave the scroll story at any point.

**Decisions made and dropped along the way:**
- No persistent "mini-tree" breadcrumb/wayfinding — added friction, worked against the lead-gen goal
- No "fruit = case studies" illustration on the tree — didn't read well visually; case studies reached via nav instead
- No "seeds = blog" illustration near the roots — same reasoning; blog reached via nav instead
- No photo/portfolio gallery on the homepage — the mature-tree stage contains only the Get Quote CTA

---

## 8. About Page

**Team presentation:** Fully brand-only — no individual team members or photos shown.

**Backstory (draft — placeholder, to be swapped for real founding details later):**

> "Pixel Sprout didn't start as an agency — it started as a single idea, planted without a roadmap. Every business we work with starts the same way: small, uncertain, full of potential nobody's noticed yet. We built Pixel Sprout to be the thing that idea needed — not another vendor, but a partner that sticks around from the first sketch to the fully grown product. We don't believe in handing off a deliverable and disappearing. We believe in growing something with you."

**Mission / Values:**
1. **Grown, not assembled** — every project is one connected system (brand, product, growth), not disconnected pieces from different vendors
2. **Rooted in outcomes** — we measure success by what grows after launch, not just what ships
3. **No upfront guesswork** — you see the outcome before you commit fully

---

## 9. Contact / Get Quote Form

**Fields:**
1. Name
2. Business type / industry
3. What problem are you facing? *(open text)*
4. Which service(s) are you interested in? *(multi-select, from the 9 services)*
5. Timeline *(optional)*
6. Email
7. Phone / WhatsApp number

**Backend requirement:** Submissions must be transferred into a **Google Sheet in structured format** (not a Google Form embed) — requires a backend integration (e.g. Apps Script webhook or equivalent), to be spec'd at build stage.

---

## 10. Case Studies *(Deferred — content finalized later, noted here for reference)*

Both case studies will be shown **anonymized** on the site (e.g. "a civil contractor client"), not under real client names.

**Case Study 1** — Civil contractor client (internal reference: Bhumi Construction)
- Website build
- AI automation: site manager logs daily site details, structured directly into Google Sheets — simplifies the billing process

**Case Study 2** — Homeopathic clinic client
- Website with a "Book Appointment" section — patient books a consultation visually
- Auto-generated Google Meet link sent to the patient via WhatsApp
- Doctor joins the same call, records consultation observations

Outcomes/results and full write-ups for both are still to be defined.

---

## 11. Blog *(Deferred)*

No content at launch. Page/nav link exists for later; real posts and topic categories to be defined when the blog is activated.

---

## 12. Footer

- Soil/root-textured background, static (no further scroll-linked animation)
- Contact details:
  - Email: pixelsproutt@gmail.com
  - Bhavya Sarvaiya — +91 7738932868
- Sitemap links
- Legal links *(none exist yet)*

---

## 13. Technical Direction *(flagged — not yet fully spec'd, to be detailed at build stage)*

- Likely stack: **React / Next.js**
- Scroll-linked animation: **GSAP ScrollTrigger**, possibly the **View Transitions API** for select page-to-page morphs where used
- Homepage growth illustration should be built as **one flexible, parametric SVG system** (reusable branch/leaf/root shapes) rather than many bespoke illustrations per stage
- Every non-homepage page must **fully render its own complete state on direct load** — must not depend on the homepage sequence having played first (protects SEO and direct/shared links)
- **Logo needs a vector/SVG version** — current asset is JPG and cannot be scaled, recolored, or morphed for animation

---

## 14. Outstanding Items (Not Yet Defined)

- Case study outcomes/results and full write-ups (deferred)
- Blog content, topics, and categories (deferred)
- Legal pages — Privacy Policy, Terms of Service (not started)
- Final quote-form backend integration details (Sheet structure, webhook)
- Founder/company real backstory to replace the placeholder About copy
