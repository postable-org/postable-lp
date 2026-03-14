# Translation System — AlgoFlow Landing Page

This document explains in full detail how the internationalisation (i18n) system was built, covering the JSON file architecture, the React context pipeline, the custom hook, and the language-switcher button's design and behaviour.

---

## Table of Contents

1. [Philosophy & Library Choice](#1-philosophy--library-choice)
2. [JSON File Architecture](#2-json-file-architecture)
3. [Locale Index Files](#3-locale-index-files)
4. [Language Context Provider](#4-language-context-provider)
5. [useTranslation Hook](#5-usetranslation-hook)
6. [Provider Registration in the App Root](#6-provider-registration-in-the-app-root)
7. [Language Switcher Button](#7-language-switcher-button)
8. [How Components Consume Translations](#8-how-components-consume-translations)
9. [Full Key Reference](#9-full-key-reference)
10. [Data Flow Diagram](#10-data-flow-diagram)

---

## 1. Philosophy & Library Choice

The translation system is **entirely custom** — no `react-i18next`, `next-intl`, `lingui`, or any other third-party i18n library is used. The decision was deliberate:

- The app only needs **two languages** (English and Portuguese), so a full i18n library would be unnecessary overhead.
- Keeping everything in-house means zero peer dependencies, zero runtime hydration quirks, and complete control over the API surface.
- The implementation is small enough (~60 lines of provider code) that it is easier to understand, debug, and extend than any external solution.

The system is built on three pillars:

| Pillar | File | Responsibility |
|---|---|---|
| Data | `src/locales/{en,pt}/` | Translated strings, organised by page section |
| State | `src/context/LanguageContext.tsx` | Active language, persistence, `t()` function |
| API | `src/hooks/useTranslation.ts` | Clean consumption interface for components |

---

## 2. JSON File Architecture

All translated strings live under `src/locales/`. The folder is split by language, and inside each language folder, strings are further split **one JSON file per page section**.

```
src/locales/
├── en/
│   ├── index.ts            ← aggregates all EN JSONs
│   ├── header.json
│   ├── hero.json
│   ├── how-it-works.json
│   ├── pain-points.json
│   ├── features.json
│   ├── faq.json
│   ├── cta.json
│   └── demo.json
└── pt/
    ├── index.ts            ← aggregates all PT JSONs
    ├── header.json
    ├── hero.json
    ├── how-it-works.json
    ├── pain-points.json
    ├── features.json
    ├── faq.json
    ├── cta.json
    └── demo.json
```

### Why one file per section?

- **Separation of concerns** — a copywriter working on the hero section only touches `hero.json`.
- **Reduced merge conflicts** — two developers translating different sections never edit the same file.
- **Clarity** — the file name tells you exactly where those strings appear on the page.

### JSON shape conventions

Each JSON file exports a flat or lightly nested object. Flat keys are used for simple strings; arrays are used where the content is list-like (steps, cards, FAQ items, etc.).

**Flat string example — `header.json`:**
```json
{
  "product": "Product",
  "useCases": "Use Cases",
  "pricing": "Pricing",
  "blog": "Blog",
  "resources": "Resources",
  "github": "GitHub",
  "languageEn": "US",
  "languagePt": "BR",
  "languageEnFull": "English (US)",
  "languagePtFull": "Português (BR)",
  "languageLabel": "Language: "
}
```

**Array example — `how-it-works.json`:**
```json
{
  "eyebrow": "HOW IT WORKS",
  "heading": "Master algorithms in 3 simple steps",
  "cta": "Start learning",
  "steps": [
    {
      "label": "01",
      "stepLabel": "Step 1",
      "title": "Choose a topic",
      "description": "Pick any data structure or algorithm from the library."
    }
  ]
}
```

**Nested array example — `features.json`:**
```json
{
  "modules": [
    {
      "badge": "Visualiser",
      "title": "See it run",
      "items": ["Step-by-step animation", "Variable inspector"]
    }
  ]
}
```

The key naming convention is **camelCase** throughout, matching the JavaScript object access pattern.

---

## 3. Locale Index Files

Each language folder contains an `index.ts` that imports every section JSON and re-exports them as a single namespaced object.

```typescript
// src/locales/en/index.ts
import header from "./header.json";
import hero from "./hero.json";
import howItWorks from "./how-it-works.json";
import painPoints from "./pain-points.json";
import features from "./features.json";
import faq from "./faq.json";
import cta from "./cta.json";
import demo from "./demo.json";

const en = { header, hero, howItWorks, painPoints, features, faq, cta, demo };
export default en;
```

The **import alias** (`howItWorks`) becomes the **namespace** used in dot-notation keys. For example:

- File `how-it-works.json` → imported as `howItWorks` → accessed as `t("howItWorks.heading")`
- File `pain-points.json` → imported as `painPoints` → accessed as `t("painPoints.eyebrow")`

This one-to-one mapping between the object key in `index.ts` and the first segment of every `t()` key is the central convention of the whole system.

---

## 4. Language Context Provider

`src/context/LanguageContext.tsx` is the heart of the system. It manages the active language as React state, persists it to `localStorage`, and exposes the `t()` translation function.

```typescript
// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en";
import pt from "@/locales/pt";

export type Language = "EN" | "PT";

const translationsMap: Record<Language, any> = {
  EN: en,
  PT: pt,
};

const getNestedTranslation = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
```

### `translationsMap`

A static lookup table that maps the language code string to its full translations object. Both `en` and `pt` objects are imported at module load time (i.e., at build time for Next.js), so there is no async fetching and no loading state needed.

### `getNestedTranslation`

A small recursive utility that walks a dot-separated path through a nested object. Given `"howItWorks.steps.0.title"`, it reduces the path segments one by one:

```
obj → obj["howItWorks"] → obj["howItWorks"]["steps"] → obj["howItWorks"]["steps"][0] → ...
```

This is what makes the `t("namespace.key")` API work cleanly without any special syntax.

### State and persistence

```typescript
const [language, setLanguage] = useState<Language>("EN");

// On mount: restore saved preference
useEffect(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
  if (savedLanguage && (savedLanguage === "EN" || savedLanguage === "PT")) {
    setLanguage(savedLanguage);
  }
}, []);

// On every change: persist and update the HTML lang attribute
useEffect(() => {
  localStorage.setItem("preferredLanguage", language);
  document.documentElement.lang = language.toLowerCase();
}, [language]);
```

- The default language is `"EN"` (defined in `useState`).
- On first render the provider reads `localStorage.preferredLanguage` and, if it is a valid language code, sets the state to it. This ensures the user's previously chosen language is restored across page loads without any flash.
- Whenever `language` changes, it is written back to `localStorage` and `<html lang="...">` is updated. The `lang` attribute is used by screen readers and browser translation prompts, making this a meaningful accessibility and SEO detail.

### The `t()` function

```typescript
const t = (key: string): string => {
  const translations = translationsMap[language] || translationsMap["EN"];
  const value = getNestedTranslation(translations, key);
  if (value === undefined) {
    console.warn(`Translation key missing: ${key}`);
    return key;
  }
  return value;
};
```

- Looks up the active language translations (falls back to `EN` if somehow undefined).
- Traverses the nested path with `getNestedTranslation`.
- If a key is missing (e.g., a PT key was forgotten), it logs a warning and returns the raw key string rather than crashing. This is a safe-failure strategy — the app keeps working, and the raw key acts as a visible reminder that a translation is missing.

---

## 5. useTranslation Hook

`src/hooks/useTranslation.ts` is a thin ergonomic wrapper around `useContext`.

```typescript
"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }

  return context;
};
```

It exists for two reasons:

1. **Error guard** — if a component accidentally uses the hook outside the provider tree, it receives a clear, actionable error message instead of a silent `undefined` crash.
2. **Import convenience** — components import from `@/hooks/useTranslation` rather than having to import both `useContext` and `LanguageContext` separately.

The hook returns the full context shape: `{ language, setLanguage, t }`.

---

## 6. Provider Registration in the App Root

`LanguageProvider` is registered once at the top of the component tree in `src/app/layout.tsx`:

```tsx
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

Wrapping `children` at this level means every page, every layout segment, and every component in the entire app can call `useTranslation()` without any additional setup.

---

## 7. Language Switcher Button

`src/components/molecules/LanguageSwitcher.tsx` is the interactive control that lets users toggle the language.

### Props

```typescript
interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}
```

A single `variant` prop controls which visual style is rendered. The logic (toggle behaviour, ARIA label, translation calls) is identical for both variants.

### Toggle behaviour

```typescript
const toggleLanguage = () => {
  setLanguage(language === "EN" ? "PT" : "EN");
};
```

The language is a binary toggle — clicking always flips between the two options. There is no dropdown or select; the button itself acts as the switch. This is intentional: with only two languages, a dropdown would add interaction cost for no benefit.

### Desktop variant

```tsx
<button
  onClick={toggleLanguage}
  className="mt-1 px-3 py-1.5 border border-black/10 rounded-full text-[13px] font-medium text-[#45474D] hover:text-black hover:bg-black/5 hover:border-black/20 transition-all uppercase flex items-center gap-1"
  aria-label={t("header.languageLabel")}
>
  {language === "EN" ? t("header.languageEn") : t("header.languagePt")}
</button>
```

**Visual design breakdown:**

| Class | Effect |
|---|---|
| `px-3 py-1.5` | Comfortable tap target without being oversized |
| `border border-black/10` | Subtle 10% opacity black border — visible on white but not heavy |
| `rounded-full` | Pill shape — a common pattern for locale/badge controls |
| `text-[13px]` | Slightly smaller than body text, signalling a secondary control |
| `font-medium` | Readable at small size without being bold |
| `text-[#45474D]` | Mid-grey — less visually dominant than the nav links |
| `hover:text-black` | Full black text on hover for clear feedback |
| `hover:bg-black/5` | Very light grey fill on hover — softly highlights the button |
| `hover:border-black/20` | Slightly darker border on hover — reinforces the active state |
| `transition-all` | Smooth 150 ms transition for all properties |
| `uppercase` | The short codes (`US`, `BR`) are displayed in uppercase for visual consistency with locale badge conventions |
| `flex items-center gap-1` | Allows an icon to be added beside the text in the future |

The **label text** is the short country code: `"US"` for English, `"BR"` for Portuguese. These come from `t("header.languageEn")` and `t("header.languagePt")` respectively, so they are themselves translated strings and could be changed without touching the component code.

### Mobile variant

```tsx
<button
  onClick={toggleLanguage}
  className="text-[15px] font-medium text-[#45474D] py-2 text-left"
  aria-label={t("header.languageLabel")}
>
  {t("header.languageLabel")}
  {language === "EN" ? t("header.languageEnFull") : t("header.languagePtFull")}
</button>
```

The mobile variant is designed to match the style of the other mobile menu items (full-width, left-aligned, larger touch target). It renders a complete descriptive string:

- In English: `"Language: English (US)"`
- In Portuguese: `"Idioma: Português (BR)"`

Both the label (`"Language: "` / `"Idioma: "`) and the value (`"English (US)"` / `"Português (BR)"`) are translated strings, so the entire sentence reads correctly in both languages.

### Accessibility

Both variants include an `aria-label` set to `t("header.languageLabel")` (`"Language: "` / `"Idioma: "`). This gives screen reader users a clear description of what the button controls, independent of the visible text.

### Placement in the Header

- **Desktop:** Rendered inside the right-side actions area with `<LanguageSwitcher variant="desktop" />`, hidden below the `lg` (1024 px) breakpoint.
- **Mobile:** Rendered inside the slide-down overlay menu with `<LanguageSwitcher variant="mobile" />`, visible only below the `lg` breakpoint.

---

## 8. How Components Consume Translations

Any component that needs translated text imports the hook and calls `t()` with a dot-notation key:

```tsx
import { useTranslation } from "@/hooks/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <h1>{t("hero.heading")}</h1>
  );
}
```

For array-based keys (steps, cards, FAQ items), the component accesses items by index:

```tsx
{[0, 1, 2].map((i) => (
  <div key={i}>
    <span>{t(`howItWorks.steps.${i}.label`)}</span>
    <h3>{t(`howItWorks.steps.${i}.title`)}</h3>
    <p>{t(`howItWorks.steps.${i}.description`)}</p>
  </div>
))}
```

Because `getNestedTranslation` uses `reduce` over the split path, numeric segments work the same as string keys — they index into the array at that position.

---

## 9. Full Key Reference

| Namespace | Key | Type | EN value |
|---|---|---|---|
| `header` | `header.product` | string | `"Product"` |
| `header` | `header.useCases` | string | `"Use Cases"` |
| `header` | `header.pricing` | string | `"Pricing"` |
| `header` | `header.blog` | string | `"Blog"` |
| `header` | `header.resources` | string | `"Resources"` |
| `header` | `header.github` | string | `"GitHub"` |
| `header` | `header.languageEn` | string | `"US"` |
| `header` | `header.languagePt` | string | `"BR"` |
| `header` | `header.languageEnFull` | string | `"English (US)"` |
| `header` | `header.languagePtFull` | string | `"Português (BR)"` |
| `header` | `header.languageLabel` | string | `"Language: "` |
| `hero` | `hero.type1` / `hero.type2` / `hero.type3` | string | rotating typewriter phrases |
| `hero` | `hero.primaryCTA` | string | `"Try Algo Flow"` |
| `hero` | `hero.secondaryCTA` | string | `"Watch quick demo"` |
| `howItWorks` | `howItWorks.eyebrow` | string | `"HOW IT WORKS"` |
| `howItWorks` | `howItWorks.heading` | string | `"Master algorithms in 3 simple steps"` |
| `howItWorks` | `howItWorks.cta` | string | `"Start learning"` |
| `howItWorks` | `howItWorks.steps[n].label/stepLabel/title/description` | array of objects | step content |
| `painPoints` | `painPoints.eyebrow` / `painPoints.heading` | string | section header |
| `painPoints` | `painPoints.cards[n].badge/statement/description` | array of objects | pain point cards |
| `painPoints` | `painPoints.transitionLine` | string | transition sentence |
| `features` | `features.eyebrow/heading/subtitle` | string | section header |
| `features` | `features.modules[n].badge/title/subtitle/cta/items[n]` | nested array | feature modules |
| `faq` | `faq.eyebrow` / `faq.heading` | string | section header |
| `faq` | `faq.items[n].q/a` | array of objects | FAQ pairs |
| `cta` | `cta.eyebrow/heading/subtext/cta` | string | CTA section |
| `demo` | `demo.eyebrow/heading/cta` | string | demo section |

---

## 10. Data Flow Diagram

```
User clicks LanguageSwitcher
        │
        ▼
  toggleLanguage()
  setLanguage("PT" | "EN")
        │
        ▼
  LanguageContext state updates
        │
        ├─► localStorage.setItem("preferredLanguage", ...)
        ├─► document.documentElement.lang = ...
        │
        ▼
  All components that called useTranslation() re-render
        │
        ▼
  t("some.key") looks up key in translationsMap[newLanguage]
        │
        ▼
  getNestedTranslation traverses the nested JSON object
        │
        ▼
  Returns translated string → rendered in the DOM
```

On the next page load:

```
LanguageProvider mounts
        │
        ▼
  useEffect reads localStorage.getItem("preferredLanguage")
        │
        ▼
  setLanguage(savedValue)  ← restores last choice silently
```
