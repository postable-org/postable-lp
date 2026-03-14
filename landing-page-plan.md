# landing-page-plan.md

> Source files: `landingPage.md` (structure + design), `designPatterns.md` (Atomic Design architecture), `SKILL.md` + `thesis.md` (Postable product context + copy)
>
> **Section Order (from landingPage.md flowchart):**
> Header → Hero → Trust/Logos → How It Works → Pain Points → Features Intro → Feature Blocks → Testimonials → Video Demo → Extension → Pricing → FAQ → Final CTA → Footer

---

## Phase 0 — Design System Foundation

- [x] Define custom colors in `tailwind.config.ts`: 
  - `background: '#FFFFFF'`
  - `surface: '#F5F5F5'`
  - `primary: '#0A0A0A'`
  - `secondary: '#6B6B6B'`
  - `muted: '#B0B0B0'`
  - `border: '#E0E0E0'`
- [x] Set base body font to Inter (sans-serif) and headings to DM Sans via `next/font/google`
- [x] Define border system using the custom `#E0E0E0` border color (1px solid)
- [x] Define shape language tokens: `rounded-lg` (8px for buttons/inputs), `rounded-xl` (12px for cards), `rounded-2xl` (16px for modals/large containers)
- [x] Define shadow token: `shadow-sm` (0 1px 2px rgba(0,0,0,0.06) maximum)
- [x] Define spacing rhythm: base unit 4px (4, 8, 12, 16, 24, 32, 48, 64), section wrapper `py-16` to `py-24`, container `max-w-7xl`, default `px-4`
- [x] Define motion easing token: `duration-200 ease-out` for snappy transitions
- [x] Define CTA style: `bg-[#0A0A0A] text-white rounded-lg` — reused everywhere consistently
- [x] Define accent strategy: Strictly Black & White (Monochrome). No accent colors, no gradients. Active states use darker black or lighter gray. Links are black underlined.

---

## Phase 1 — Atoms

- [x] Create `src/components/atoms/Button/Button.tsx` — primary variant: `bg-[#0A0A0A] text-white rounded-lg`; secondary variant: outlined (`border-[#E0E0E0]`); ghost variant
- [x] Create `src/components/atoms/Button/Button.types.ts` — typed `ButtonProps` interface
- [x] Create `src/components/atoms/Button/index.ts` — named re-export
- [x] Create `src/components/atoms/Typography/Typography.tsx` — headings (h1-h4) use DM Sans (`font-bold`), body/caption/label use Inter (`font-normal`)
- [x] Create `src/components/atoms/Typography/Typography.types.ts`
- [x] Create `src/components/atoms/Typography/index.ts`
- [x] Create `src/components/atoms/Badge/Badge.tsx` — rounded-full, small, monochrome styling (`bg-[#F5F5F5] text-[#0A0A0A]`)
- [x] Create `src/components/atoms/Badge/Badge.types.ts`
- [x] Create `src/components/atoms/Badge/index.ts`
- [x] Create `src/components/atoms/Icon/Icon.tsx` — inline SVG map for: check, x, chevron-down, chevron-up, arrow-right, zap, chart, users, clock, target, star, menu
- [x] Create `src/components/atoms/Icon/Icon.types.ts` — typed `IconName` union
- [x] Create `src/components/atoms/Icon/index.ts`

---

## Phase 2 — Molecules

- [x] Create `src/components/molecules/NavItem/NavItem.tsx` — anchor link with active state, Inter font
- [x] Create `src/components/molecules/NavItem/index.ts`
- [x] Create `src/components/molecules/HowItWorksTab/HowItWorksTab.tsx` — pill button (active: `bg-[#0A0A0A] text-white`, inactive: outlined); shows step number + label
- [x] Create `src/components/molecules/HowItWorksTab/index.ts`
- [x] Create `src/components/molecules/PainCard/PainCard.tsx` — `bg-white` card, `border-[#E0E0E0]`, small numeric badge (`01`…`04`), pain statement, body description
- [x] Create `src/components/molecules/PainCard/index.ts`
- [x] Create `src/components/molecules/FeatureListItem/FeatureListItem.tsx` — clickable row inside feature module: number circle + text, active/inactive state
- [x] Create `src/components/molecules/FeatureListItem/index.ts`
- [x] Create `src/components/molecules/TestimonialCard/TestimonialCard.tsx` — `border-[#E0E0E0]` card, highlighted phrase, 5-star line, avatar initials
- [x] Create `src/components/molecules/TestimonialCard/index.ts`
- [x] Create `src/components/molecules/PricingFeatureItem/PricingFeatureItem.tsx` — check icon + feature text, for use inside pricing cards
- [x] Create `src/components/molecules/PricingFeatureItem/index.ts`
- [x] Create `src/components/molecules/FAQItem/FAQItem.tsx` — single-open collapsible with chevron rotation, `use client`
- [x] Create `src/components/molecules/FAQItem/FAQItem.types.ts`
- [x] Create `src/components/molecules/FAQItem/index.ts`

---

## Phase 3 — Organism: Header

- [x] Create `src/components/organisms/Header/Header.tsx` as `use client` component
- [x] Implement fixed top positioning (`fixed inset-x-0 top-0 z-50`)
- [x] Implement transparent initial state (`bg-transparent`)
- [x] Implement scroll listener: after `scrollY > 100px` apply `bg-white/80 backdrop-blur-md border-b border-[#E0E0E0]` and compact padding
- [x] Add smooth transition on background/padding change (`transition-all duration-200`)
- [x] Desktop layout: logo left + center floating nav pill + right CTA button
- [x] Nav links (anchors): "Como funciona" → `#como-funciona`, "Funcionalidades" → `#funcionalidades`, "Preços" → `#precos`
- [x] Mobile layout: hamburger icon button on right
- [x] Mobile: hamburger click opens drawer with same nav links
- [x] CTA button uses primary variant: "Começar grátis"
- [x] Create `src/components/organisms/Header/index.ts`

---

## Phase 4 — Organism: Hero

- [x] Create `src/components/organisms/HeroSection/HeroSection.tsx`
- [x] Background: pure white (`#FFFFFF`)
- [x] Above headline: small outline badge with subtle animated dot — "Análise competitiva local com IA"
- [x] Headline: `text-4xl md:text-6xl font-bold text-[#0A0A0A]` (DM Sans) — "Seus concorrentes não sabem o que estão perdendo. Você vai."
- [x] Subtitle: concise, `text-[#6B6B6B]` (Inter), one sentence explaining the value
- [x] Primary CTA: black button — "Começar teste grátis de 7 dias"
- [x] Secondary CTA: ghost/text link — "Ver como funciona →" — scrolls to `#como-funciona`
- [x] Micro-copy below CTAs: "Sem cartão de crédito. Cancele quando quiser." (`text-[#B0B0B0]`)
- [x] Sequential reveal motion: title → subtitle → CTA → badge (snappy fade-up, `duration-200 ease-out`)
- [x] Create `src/components/organisms/HeroSection/index.ts`

---

## Phase 5 — Organism: Trust / Logos Strip

- [x] Create `src/components/organisms/TrustStrip/TrustStrip.tsx`
- [x] Thin editorial layout: centered uppercase label + proof items side by side
- [x] Include 4 proof stats: 28% queda Instagram · R$97/mês vs R$800–2.500 · < R$0,05 custo API · 7 dias grátis
- [x] Styling: `border-y border-[#E0E0E0] bg-[#F5F5F5] py-10` — quiet credibility tone
- [x] Source note in caption below: "Fonte: Socialinsider 2025 Social Media Benchmarks Report"
- [x] Create `src/components/organisms/TrustStrip/index.ts`

---

## Phase 6 — Organism: How It Works (Interactive Tabs)

- [x] Create `src/components/organisms/HowItWorksSection/HowItWorksSection.tsx` as `use client`
- [x] Section header: label + headline "Do onboarding ao primeiro post em menos de 10 minutos."
- [x] 4 tab pills using `HowItWorksTab` molecule: "01 Onboarding", "02 Análise", "03 Gap", "04 Publicação"
- [x] Tab layout: `grid-cols-2` on mobile (2×2), pill row on desktop
- [x] One large content card below tabs: shows content for active tab
- [x] Content card: large watermark step number (absolute, `text-[#F5F5F5] text-[120px]`), icon chip, bold title, plain explanation text
- [x] Active tab state managed with `useState(0)`
- [x] Tab switch: instant content swap (no animation required for MVP)
- [x] CTA appears immediately below content card: black button "Começar agora — 7 dias grátis"
- [x] Step content data:
  - 01: "Informe seu nicho e cidade" — onboarding in under 5 min
  - 02: "Mapeamos seus concorrentes locais" — automatic analysis of top 3
  - 03: "Encontramos o espaço vazio" — gap of uncovered topics
  - 04: "Posts prontos, você aprova" — generation + approval flow
- [x] Create `src/components/organisms/HowItWorksSection/index.ts`

---

## Phase 7 — Organism: Pain Points

- [x] Create `src/components/organisms/PainPointsSection/PainPointsSection.tsx`
- [x] Section header: label + headline
- [x] 4-card grid: `grid-cols-1 sm:grid-cols-2` with `gap-5`
- [x] Each card uses `PainCard` molecule
- [x] Card background: `bg-white`, border `border-[#E0E0E0] rounded-xl` (no shadow or very light shadow)
- [x] 4 pain cards (numbered 01–04):
  - 01: "Não sabem o que postar" — without method, strategy, or time
  - 02: "Sem consistência, sem alcance" — algorithm penalizes inactive accounts
  - 03: "Zero visibilidade competitiva" — no insight into what competitors do or ignore
  - 04: "Conteúdo não gera leads" — posts without CTA and local context don't convert
- [x] Section background: `bg-[#F5F5F5]` to separate from previous
- [x] Emotional transition line at bottom: "Esse ciclo tem solução. E não precisa de agência."
- [x] Create `src/components/organisms/PainPointsSection/index.ts`

---

## Phase 8 — Organism: Features Intro

- [x] Create `src/components/organisms/FeaturesIntro/FeaturesIntro.tsx`
- [x] Centered title + subtitle — framing text before the feature modules
- [x] Title: "Tudo que você precisa para transformar conteúdo em crescimento."
- [x] Subtitle: one-sentence description of the platform's scope
- [x] No interactive elements — pure framing section
- [x] Create `src/components/organisms/FeaturesIntro/index.ts`

---    

## Phase 9 — Organism: Feature Blocks (Interactive Video Tabs, 5 Features)

- [x] Create `src/components/organisms/FeatureBlocks/FeatureBlocks.tsx` as `use client`
- [x] 5 feature blocks total (interactive video-tab interface per landingPage.md)
- [x] Module layout per block: `grid-cols-1 lg:grid-cols-5` — left text 2 cols, right media 3 cols
- [x] Alternate orientation per module: even modules use `reverse` (media left, text right)
- [x] Left side per module: outline badge + title + subtitle + clickable `FeatureListItem` list (sub-features)
- [x] Right side per module: video panel that swaps based on selected feature tab (autoplay muted looping mp4)
- [x] Accent strategy: Monochrome active states (`border-[#0A0A0A]` or `bg-[#F5F5F5]` for active items, no color glows)
- [x] Clicking a `FeatureListItem` highlights that row and swaps video in right panel (local state per module)
- [x] Video panel shows skeleton loader while video loads, clean `border-[#E0E0E0]` around panel
- [x] 5 feature blocks with content (per landingPage.md structure):
  - Block 1: "Análise de gap competitivo" — sub-items: competitor mapping, gap identification, theme prioritization
  - Block 2 (reversed): "Geração de conteúdo estratégico" — sub-items: regional trends, gap-based posts, tone calibration
  - Block 3: "Aprovação e publicação" — sub-items: editorial calendar, approval workflow, scheduled publishing
  - Block 4 (reversed): "Automatização de distribuição" — sub-items: multi-platform scheduling, timing optimization, performance tracking
  - Block 5: "Análise de resultados" — sub-items: engagement metrics, ROI calculation, optimization recommendations
- [x] Create `src/components/organisms/FeatureBlocks/index.ts`

---

## Phase 10 — Organism: Testimonials

- [x] Create `src/components/organisms/TestimonialsSection/TestimonialsSection.tsx`
- [x] Section header: label + headline "PMEs brasileiras que já postam com estratégia."
- [x] Layout: two-column staggered grid (`md:grid-cols-2`), second column offset by `md:mt-8`
- [x] 6 testimonial cards using `TestimonialCard` molecule
- [x] Testimonial data (6 fake SMB owner profiles across Brazilian cities and niches):
  - Nutricionista · BH — gap analysis competitive advantage
  - Personal Trainer · SP — WhatsApp leads from organic posts
  - Consultora · Curitiba — posts based on local trends
  - Dentista · Porto Alegre — R$1.800/mês saved vs freelancer
  - Fundadora SaaS · Recife — professional content without expertise
  - Fisioterapeuta · Florianópolis — dominated uncovered topic niche
- [x] Cards have 5-star rating, highlighted quote phrase in bold, author name + role + city
- [x] Create `src/components/organisms/TestimonialsSection/index.ts`

---

## Phase 11 — Organism: Video Demo (Click-to-Play YouTube)

- [x] Create `src/components/organisms/VideoDemoSection/VideoDemoSection.tsx`
- [x] Section header: label + headline "Veja como funciona na prática."
- [x] Static thumbnail + play overlay icon initially (no YouTube embed cost before user intent)
- [x] Large framed video card (`shadow-sm`, `border-[#E0E0E0]`), centered on page
- [x] On click: replace thumbnail with YouTube iframe embed
- [x] Localization: Portuguese locale forces caption settings in iframe URL params
- [x] Styling: `rounded-xl`, dark border, generous padding around video
- [x] Create `src/components/organisms/VideoDemoSection/index.ts`

---

## Phase 12 — Organism: Extension Section (Optional Acquisition Channel)

- [x] Create `src/components/organisms/ExtensionSection/ExtensionSection.tsx`
- [x] Optional section for Chrome extension acquisition
- [x] Rounded glass-like card design: `bg-[#F5F5F5] border border-[#E0E0E0] rounded-2xl`
- [x] Headline: "Instale a extensão para análise em tempo real"
- [x] Subtitle: one-line benefit statement
- [x] CTA pair: 
  - Primary black button: "Instalar extensão" (links to Chrome Web Store)
  - Secondary ghost/text link: "Experimentar na plataforma"
- [x] Accent color: neutral section with monochrome emphasis (e.g., bold black text)
- [x] Create `src/components/organisms/ExtensionSection/index.ts`

---

## Phase 13 — Organism: Pricing

- [x] Create `src/components/organisms/PricingSection/PricingSection.tsx` as `use client`
- [x] Section anchor id: `precos`
- [x] Section header: label + headline
- [x] Billing interval toggle: "Mensal / Anual" — `useState('monthly')`, persists in component state
- [x] Annual toggle: show 20% discount badge when annual is selected
- [x] 3 pricing cards side by side (`grid-cols-1 md:grid-cols-3`):
  - Básico: R$97/mês (or R$78/mês annual) · 20 posts/mês · features list
  - Avançado (**"Mais popular"** ribbon): R$197/mês (or R$158/mês annual) · 50 posts/mês + integrações · features list
  - Agência: R$297/mês (or R$238/mês annual) · Ilimitado · features list
- [x] "Mais popular" card: prominent black border (`border-[#0A0A0A]`) or dark background (`bg-[#F5F5F5]`), slightly larger scale (no gradient blobs)
- [x] Each card: big price, billing cadence label, feature checklist using `PricingFeatureItem`, strong CTA button
- [x] Trial chip on each card: "7 dias grátis" badge
- [x] All CTA buttons: black variant — "Começar teste grátis"
- [x] Note below cards: "Sem cartão de crédito · Cancele quando quiser"
- [x] Create `src/components/organisms/PricingSection/index.ts`

---

## Phase 14 — Organism: FAQ

- [x] Create `src/components/organisms/FAQSection/FAQSection.tsx`
- [x] Section anchor id: `faq`
- [x] Narrow centered accordion column (`max-w-3xl mx-auto`)
- [x] Uses `FAQItem` molecule for each entry
- [x] Single-open behavior: only one item open at a time (lift state to FAQSection)
- [x] Chevron rotates on open/close (`rotate-180` transition)
- [x] 5 FAQ entries:
  - "Quanto custa a Postable?" — R$97/R$197/R$297 + 7-day trial
  - "Preciso de experiência em marketing?" — No, just niche + city
  - "Posso revisar os posts antes de publicar?" — Yes, always
  - "Como funciona a análise de concorrentes?" — top 3 local, gap identification
  - "Funciona para qualquer tipo de negócio?" — PMEs 1–30 employees selling digitally
- [x] Section positioned after pricing to handle objections at decision moment (per landingPage.md)
- [x] Create `src/components/organisms/FAQSection/index.ts`

---

## Phase 15 — Organism: Final CTA

- [x] Create `src/components/organisms/FinalCTASection/FinalCTASection.tsx`
- [x] Clean card-like background (`bg-[#F5F5F5]` or bordered white) — NOT aggressive "last chance" tone
- [x] Headline: "Seus concorrentes não vão esperar."
- [x] Sub-copy: 7-day free trial, no credit card
- [x] Single CTA: black button — "Começar teste grátis de 7 dias"
- [x] Micro-copy: "Sem cartão de crédito · Cancele quando quiser · Primeiro post em menos de 10 minutos"
- [x] Create `src/components/organisms/FinalCTASection/index.ts`

---

## Phase 16 — Organism: Footer

- [x] Create `src/components/organisms/Footer/Footer.tsx`
- [x] Background: `bg-[#0A0A0A]` or `bg-white` with top border
- [x] Logo wordmark "Postable" + short tagline
- [x] Legal links: Termos de Uso · Política de Privacidade
- [x] Copyright: "© 2026 Postable. Todos os direitos reservados."
- [x] Lightweight — no heavy footers with large link grids
- [x] Create `src/components/organisms/Footer/index.ts`

---

## Phase 17 — Template

- [x] Create `src/components/templates/LandingPageTemplate/LandingPageTemplate.tsx`
- [x] Accept `navbar`, `sections[]`, `footer` as props
- [x] Render as `flex flex-col min-h-screen`
- [x] `main` wraps sections array with `flex-1`
- [x] No business logic — pure layout composition
- [x] Create `src/components/templates/LandingPageTemplate/index.ts`

---

## Phase 18 — Page Assembly

- [x] Update `src/app/layout.tsx` — use Inter and DM Sans (`next/font/google`)
- [x] Update `src/app/layout.tsx` — set `lang="pt-BR"`
- [x] Update `src/app/layout.tsx` — set `title` to "Postable — Conteúdo estratégico que gera leads"
- [x] Update `src/app/layout.tsx` — set `description` meta
- [x] Update `src/app/globals.css` — replace default tokens with design system from Phase 0
- [x] Update `src/app/page.tsx` — remove Next.js starter content
- [x] Update `src/app/page.tsx` — compose `LandingPageTemplate` with all organisms in correct order:
  - Header
  - HeroSection
  - TrustStrip
  - HowItWorksSection
  - PainPointsSection
  - FeaturesIntro
  - FeatureBlocks
  - TestimonialsSection
  - VideoDemoSection
  - ExtensionSection
  - PricingSection
  - FAQSection
  - FinalCTASection
  - Footer

---

## Phase 19 — QA

- [x] Verify section order in `page.tsx` matches `landingPage.md` flowchart exactly (Header → Hero → Trust → How It Works → Pain → Features → Feature Blocks → Testimonials → Video Demo → Extension → Pricing → FAQ → Final CTA → Footer)
- [x] Verify no atoms import molecules, organisms, or templates
- [x] Verify no molecules import organisms or templates
- [x] Verify no organisms import templates or pages
- [x] Verify all props interfaces are explicitly typed in TypeScript (no `any`)
- [x] Verify all components use named exports (no default exports except `page.tsx` and `layout.tsx`)
- [x] Verify all component folders follow PascalCase naming
- [x] Verify component files are at the correct atomic level path
- [x] Verify CTA style is consistent: black button everywhere (per landingPage.md) <!-- ExtensionSection secondary CTA uses ghost variant intentionally -->
- [x] Verify font is Inter body and DM Sans headings throughout
- [x] Verify all copy is in Portuguese (pt-BR) <!-- "Social Media Benchmarks Report" in TrustStrip is an acceptable proper noun/brand name -->
- [x] Verify FAQ section appears after Pricing (per landingPage.md spec)
- [x] Verify How It Works tabs are interactive (not a static list)
- [x] Verify Feature Blocks have 5 modules with alternating orientation
- [x] Verify Video Demo loads YouTube iframe only after click (no upfront embed)
- [x] Verify Extension section is optional but included
- [x] Verify Accessibility: all interactive elements have `focus:ring-2 focus:ring-[#0A0A0A] focus:outline-none`, `aria-label` on icon buttons, `alt` text on images <!-- Fixed PricingSection toggle buttons + Footer links focus rings -->
- [x] Run `npm run build` — confirm zero TypeScript and compile errors
- [ ] Verify responsive layout at 375px (mobile), 768px (tablet), 1280px (desktop)
