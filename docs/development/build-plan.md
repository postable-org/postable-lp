# Build Plan — Postable Landing Page

> Source references: `docs/design/page-structure.md` (section structure), `docs/design/visual-identity.md` (design tokens), `.cursor/rules/architecture.mdc` (Atomic Design rules), `docs/product/thesis.md` (product context)
>
> **Section Order:** Header → Hero → Trust Strip → How It Works → Pain Points → Features Intro → Feature Blocks → Testimonials → Video Demo → Extension → Pricing → FAQ → Final CTA → Footer

---

## Phase 0 — Design System Foundation

- [x] Define custom colors in `tailwind.config.ts`
- [x] Set base body font to Inter and headings to DM Sans via `next/font/google`
- [x] Define border system using `#E0E0E0` (1px solid)
- [x] Define shape tokens: `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- [x] Define shadow token: `shadow-sm` (0 1px 2px rgba(0,0,0,0.06) maximum)
- [x] Define spacing rhythm: base unit 4px, section wrapper `py-16` to `py-24`, container `max-w-7xl`, default `px-4`
- [x] Define motion token: `duration-200 ease-out`
- [x] Define CTA style: `bg-[#0A0A0A] text-white rounded-lg` — reused everywhere consistently
- [x] Define accent strategy: Strictly monochrome. No accent colors, no gradients.

---

## Phase 1 — Atoms

- [x] `Button` — primary, secondary (outlined), ghost variants
- [x] `Typography` — h1–h4 (DM Sans bold), body/caption/label (Inter)
- [x] `Badge` — rounded-full, small, monochrome (`bg-[#F5F5F5] text-[#0A0A0A]`)
- [x] `Icon` — inline SVG map: check, x, chevron-down, chevron-up, arrow-right, zap, chart, users, clock, target, star, menu

---

## Phase 2 — Molecules

- [x] `NavItem` — anchor link with active state
- [x] `HowItWorksTab` — pill button (active: `bg-[#0A0A0A] text-white`, inactive: outlined)
- [x] `PainCard` — white card, border, numeric badge (`01`…`04`), pain statement + description
- [x] `FeatureListItem` — clickable row: number circle + text, active/inactive state
- [x] `TestimonialCard` — bordered card, highlighted phrase, 5-star line, avatar initials
- [x] `PricingFeatureItem` — check icon + feature text
- [x] `FAQItem` — single-open collapsible with chevron rotation (`use client`)

---

## Phase 3 — Organism: Header

- [x] Fixed top positioning (`fixed inset-x-0 top-0 z-50`)
- [x] Transparent initially; scroll >100px → `bg-white/80 backdrop-blur-md border-b border-[#E0E0E0]`
- [x] Desktop: logo left + center floating nav pill + right CTA button
- [x] Mobile: hamburger opens drawer with same nav links
- [x] Smooth transition on background/padding change (`transition-all duration-200`)

---

## Phase 4 — Organism: Hero

- [x] Small outline badge with animated dot above headline
- [x] Big headline `text-4xl md:text-6xl font-bold text-[#0A0A0A]`
- [x] Subtitle in `text-[#6B6B6B]`
- [x] Primary CTA: black button
- [x] Secondary CTA: ghost link → `#como-funciona`
- [x] Micro-copy below CTAs in `text-[#B0B0B0]`
- [x] Sequential reveal motion (fade-up, `duration-200 ease-out`)

---

## Phase 5 — Organism: Trust Strip

- [x] Thin editorial layout: centered uppercase label + 4 proof stats
- [x] Styling: `border-y border-[#E0E0E0] bg-[#F5F5F5] py-10`
- [x] Source note caption below

---

## Phase 6 — Organism: How It Works

- [x] 4 tab pills using `HowItWorksTab` molecule (`use client`)
- [x] Tab layout: `grid-cols-2` on mobile, pill row on desktop
- [x] One large content card below tabs with watermark step number
- [x] Active tab state with `useState(0)`, instant content swap
- [x] CTA below content card

---

## Phase 7 — Organism: Pain Points

- [x] 4-card grid: `grid-cols-1 sm:grid-cols-2 gap-5`
- [x] Each card uses `PainCard` molecule
- [x] Section background: `bg-[#F5F5F5]`
- [x] Emotional transition line at bottom

---

## Phase 8 — Organism: Features Intro

- [x] Centered title + subtitle — framing text before the feature modules
- [x] No interactive elements — pure framing section

---

## Phase 9 — Organism: Feature Blocks

- [x] 5 feature blocks (`use client`)
- [x] Module layout: `grid-cols-1 lg:grid-cols-5` — left text 2 cols, right media 3 cols
- [x] Alternate orientation per module (even modules are reversed)
- [x] Clicking a `FeatureListItem` highlights that row and swaps video in right panel
- [x] Video panel shows skeleton loader while video loads

---

## Phase 10 — Organism: Testimonials

- [x] Two-column staggered grid (`md:grid-cols-2`), second column offset `md:mt-8`
- [x] 6 testimonial cards using `TestimonialCard` molecule

---

## Phase 11 — Organism: Video Demo

- [x] Static thumbnail + play overlay initially — no YouTube embed before click
- [x] On click: replace thumbnail with YouTube iframe embed
- [x] Localization: PT locale forces caption settings in iframe URL params

---

## Phase 12 — Organism: Extension Section

- [x] Rounded card: `bg-[#F5F5F5] border border-[#E0E0E0] rounded-2xl`
- [x] CTA pair: primary black button + secondary ghost link

---

## Phase 13 — Organism: Pricing

- [x] Billing interval toggle: "Mensal / Anual" (`use client`)
- [x] Annual toggle: 20% discount badge
- [x] 3 pricing cards: Básico · Avançado ("Mais popular") · Agência
- [x] "Mais popular" card: prominent `border-[#0A0A0A]`
- [x] "7 dias grátis" badge on each card
- [x] Note below: "Sem cartão de crédito · Cancele quando quiser"

---

## Phase 14 — Organism: FAQ

- [x] Narrow centered accordion (`max-w-3xl mx-auto`)
- [x] Single-open behavior (state lifted to FAQSection)
- [x] Chevron rotates on open/close
- [x] 5 FAQ entries

---

## Phase 15 — Organism: Final CTA

- [x] Clean card-like background — not aggressive tone
- [x] Single black CTA button

---

## Phase 16 — Organism: Footer

- [x] Logo wordmark + tagline
- [x] Legal links: Termos de Uso · Política de Privacidade
- [x] Copyright line

---

## Phase 17 — Template

- [x] `LandingPageTemplate` — accepts `navbar`, `sections[]`, `footer`
- [x] `flex flex-col min-h-screen`; `main` wraps sections with `flex-1`
- [x] No business logic — pure layout composition

---

## Phase 18 — Page Assembly

- [x] `layout.tsx` — Inter + DM Sans fonts, `lang="pt-BR"`, page title and meta description
- [x] `globals.css` — design system tokens from Phase 0
- [x] `page.tsx` — `LandingPageTemplate` with all organisms in correct order

---

## Phase 19 — QA

- [x] Section order matches flowchart in `docs/design/page-structure.md`
- [x] Atomic Design dependency rules not violated
- [x] All props interfaces explicitly typed (no `any`)
- [x] All components use named exports
- [x] CTA style is consistent everywhere (black button)
- [x] Font is Inter body and DM Sans headings throughout
- [x] All copy is in Portuguese (pt-BR)
- [x] FAQ section appears after Pricing
- [x] How It Works tabs are interactive
- [x] Feature Blocks have 5 modules with alternating orientation
- [x] Video Demo loads YouTube iframe only after click
- [x] Accessibility: `focus:ring-2`, `aria-label` on icon buttons, `alt` on images
- [x] `npm run build` — zero TypeScript and compile errors
- [ ] Verify responsive layout at 375px (mobile), 768px (tablet), 1280px (desktop)
