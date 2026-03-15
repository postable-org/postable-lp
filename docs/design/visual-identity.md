# Visual Identity System — Postable

The Postable brand aesthetic is strictly **black and white — monochrome, minimal, and calm**. The interface should feel like a premium, editorial-quality tool: Notion's restraint, Linear's precision, and Stripe's professionalism combined. No accent colors anywhere in the UI. The only color in the entire product is the logo mark.

---

## Color System

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0A0A0A` | Primary text, buttons, active states |
| `secondary` | `#6B6B6B` | Secondary text, subtitles |
| `muted` | `#B0B0B0` | Placeholder text, micro-copy |
| `border` | `#E0E0E0` | Borders and dividers |
| `surface` | `#F5F5F5` | Card and section backgrounds |
| `background` | `#FFFFFF` | Page background |

Dark mode inverts this scale — white text on near-black backgrounds.

**Accent strategy:** None. Buttons are black with white text. Links are black underlined. Active states use darker black or lighter gray.

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Headings | DM Sans | 700 (Bold) | All `h1`–`h4`, UI labels |
| Body | Inter | 400 (Regular) | Body text, descriptions, captions |

Base unit: **4px**. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64.

---

## Shape Language

| Token | Value | Usage |
|---|---|---|
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards |
| `rounded-2xl` | 16px | Modals, large containers |

---

## Shadow System

Shadows are barely visible — maximum `0 1px 2px rgba(0,0,0,0.06)`. This maps to Tailwind's `shadow-sm`.

No box shadows on cards or sections — use borders (`border border-[#E0E0E0]`) instead.

---

## Motion

| Token | Value | Usage |
|---|---|---|
| Duration | `200ms` | All transitions |
| Easing | `ease-out` | All transitions |

Snappy, not floaty. Keep all UI transitions under 300ms.

---

## CTA Style

Single unified style used everywhere:

```
bg-[#0A0A0A] text-white rounded-lg
```

Never use a different CTA color or shape. Consistency across every section is intentional.

---

## Design Rationale

Black and white is not boring — it is **intentional restraint** that makes the user's colorful social media posts pop by contrast. The tool disappears; the content becomes the star. This is the same principle that makes Notion feel calm while holding dense information.
