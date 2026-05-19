# XPH Design Specification

Complete reference for the visual design system. All values here are the source of truth — do not deviate without intentional design decisions.

---

## Color Palette

All colors exist as **both CSS custom properties and Tailwind tokens**. Always use the named token — never hard-code hex values inline.

| Name | Hex | CSS Var | Tailwind Class |
|---|---|---|---|
| Bright Green (primary accent) | `#1FD000` | `var(--bright-green)` | `text-bright-green` / `bg-bright-green` |
| Bright Green Hover | `#15A500` | `var(--bright-green-hover)` | `bg-bright-green-hover` |
| Forest Green | `#1a4d2e` | `var(--forest-green)` | `bg-forest-green` |
| Teal | `#1b5e5a` | `var(--teal)` | `bg-teal` / `text-teal` |
| Cream (primary text) | `#f5f3f0` | `var(--cream)` | `text-cream` / `bg-cream` |
| Deep Green (darkest green) | `#0a1f14` | `var(--deep-green)` | `bg-deep-green` |
| Deep Charcoal (footer bg) | `#1a1a1a` | `var(--deep-charcoal)` | `bg-deep-charcoal` |
| Dark BG (page background) | `#0c0c0c` | `var(--dark-bg)` | `bg-dark-bg` |

### Opacity tiers for cream text
Body copy and secondary text are never full cream — they use translucent cream:

| Usage | Value |
|---|---|
| Primary body text | `rgba(240,237,230, 0.5)` |
| Secondary / muted text | `rgba(240,237,230, 0.45)` |
| Very muted / labels | `rgba(240,237,230, 0.35)` |
| Faint dividers | `rgba(240,237,230, 0.07)` |
| Card borders | `rgba(240,237,230, 0.06)` — `rgba(240,237,230, 0.08)` |

---

## Typography

### Font Families

| Role | Font | CSS Var | Tailwind |
|---|---|---|---|
| Headline / UI | Syne (400–800) | `var(--font-headline)` | `font-headline` |
| Body copy | DM Sans (300–600) | `var(--font-body)` | `font-body` |
| Display / quote | Cormorant Garamond (300–700, italic) | `var(--font-quote)` | `font-quote` |
| Account numbers only | Tulpen One (400) | `var(--font-account)` | — (CSS only) |

Fonts are loaded by `app/layout.tsx` via `next/font/google`. **Never import them in component files.**

### Type Scale Patterns

**Page hero heading** (used on every inner page):
```
font-quote, clamp(52px, 8vw, 96px), font-weight: 300, line-height: 1.05, tracking: -0.02em
Mobile (lt-sm): 36px
```

**Section heading** (h2 on inner pages):
```
font-quote, 32px, font-weight: 300, tracking: -0.01em
Mobile: 26px or 22px depending on section
```

**Overline label** (small all-caps label above headings):
```
font-headline, 11px, font-weight: 700, uppercase, tracking: 0.15em, color: bright-green
Always preceded by a 32px wide × 1.5px tall bright-green horizontal rule
```

**Card title**:
```
font-quote, 20–24px, font-weight: 400 (normal), color: cream
```

**Body paragraph**:
```
font-body, 15–17px, line-height: 1.7–1.8, color: rgba(240,237,230, 0.5)
```

**Accent italic** (em tags within headings):
```html
<em class="italic text-bright-green font-normal">word</em>
```
Never bold. Always font-weight 400 (normal), always bright-green, always italic.

---

## Spacing Tokens

CSS variables map exactly to Tailwind's default 4px scale:

| Token | Value | Tailwind equiv |
|---|---|---|
| `--space-xs` | 8px | `p-2` / `gap-2` |
| `--space-sm` | 16px | `p-4` / `gap-4` |
| `--space-md` | 24px | `p-6` / `gap-6` |
| `--space-lg` | 32px | `p-8` / `gap-8` |
| `--space-xl` | 48px | `p-12` / `gap-12` |
| `--space-2xl` | 64px | `p-16` / `gap-16` |
| `--space-3xl` | 80px | `p-20` / `gap-20` / `py-20` |
| `--space-4xl` | 160px | `p-40` / `pb-40` |

---

## Structural Tokens

```css
--nav-height:   72px   /* height of the fixed navigation bar */
--max-width:    1200px /* max content width — all sections clamp to this */
--radius-btn:   4px    /* buttons and form inputs */
--radius-card:  8px    /* all cards */
--radius-video: 8px    /* video containers */
```

---

## Responsive Breakpoints

The project uses **desktop-first** responsive design. Tailwind's default min-width breakpoints are NOT used — only these three max-width custom screens:

| Tailwind prefix | Max-width | Use case |
|---|---|---|
| `lt-lg:` | 1023px | Tablet and below |
| `lt-md:` | 767px | Mobile and below |
| `lt-sm:` | 639px | Small mobile and below |

Standard content padding pattern:
```
Desktop: px-12 (48px)
Tablet (lt-lg): px-8 (32px)
Mobile (lt-sm): px-3 (12px)
```

All inner page sections follow this exact pattern on the section wrapper.

---

## Animation System

### `void-card` / `emerged` (scroll reveal)

Every content block that animates in on scroll uses this system. **Do not remove `void-card` from any element that has a `ref` from `useRevealOnScroll`.**

```css
/* Initial state — invisible */
.void-card { opacity: 0; }

/* Active state — added by IntersectionObserver via useRevealOnScroll hook */
.void-card.emerged {
  animation: voidEmerge .9s cubic-bezier(.22,.68,0,1.2) forwards;
}

@keyframes voidEmerge {
  0%   { opacity: 0; transform: translateY(48px) scale(.97); filter: brightness(.2) blur(3px); }
  60%  { filter: brightness(.85) blur(0px); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: brightness(1) blur(0px); }
}
```

Hook usage:
```tsx
// Single element reveal
const ref = useRevealOnScroll()
<div ref={ref} className="void-card">...</div>

// Multiple children reveal (staggered by IntersectionObserver firing order)
const ref = useRevealManyOnScroll('.ev-card')
<div ref={ref}>
  <div className="ev-card">...</div>
  <div className="ev-card">...</div>
</div>
```

### Global animation classes

| Class | Effect | Delay variants |
|---|---|---|
| `anim` | fadeUp — 0.4s ease-out | `a1`–`a5` (.05s–.4s delays) |

### Other keyframes (do not remove)
- `marquee` — used by `MarqueeSection.tsx` horizontal scroll
- `text-march` — used by `ScrollText.tsx`
- `pulse` — hero label dot and scroll-line breathing effect
- Nav overlay animations — `navOverlayIn`, `navOverlayOut`, `navLinkIn`, `navLinkOut` — all used by `Nav.tsx`'s open/closing menu states

---

## Glassmorphism Card Pattern

The signature visual style of the site. Every feature card uses this pattern.

**CSS properties that must always stay in `globals.css` (not Tailwind):**
```css
background: rgba(26,77,46,.15);          /* forest-green tint at 15% */
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);     /* REQUIRED vendor prefix — webkit won't pick this up from Tailwind */
border: 1px solid rgba(240,237,230,.06);
border-radius: var(--radius-card);        /* 8px */
position: relative;
overflow: hidden;
```

**Hover state** (always `border-color` only — never change the background on hover):
```css
.card:hover { border-color: rgba(31,208,0,.22); }
```

**`::before` glow orb** (every glass card has one):
```css
.card::before {
  content: ''; position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(31,208,0,.05), transparent 70%);
  pointer-events: none;
  /* position and size vary by card */
}
```

### 3-D Watermark Icon
Large background icon rendered with a 3-D perspective transform. Used on info cards, give tiles, and step cards:
```css
.card__bg-icon {
  position: absolute; right: -8px; top: 50%;
  transform: translateY(-50%) perspective(300px) rotateY(-52deg) rotateX(28deg) rotate(-10deg);
  color: var(--bright-green); opacity: .16;
  filter:
    drop-shadow(1px 1px 0 rgba(255,255,255,.35))
    /* ... stacked drop-shadows for 3-D depth */
    drop-shadow(12px 22px 26px rgba(0,0,0,.75));
  pointer-events: none; user-select: none;
}
```

### `GlassCard` component (`components/ui/GlassCard.tsx`)
Reusable wrapper for home-page glass cards:
```tsx
<GlassCard BgIcon={IconHeart} bgIconSize={130}>
  ...content
</GlassCard>
```
Renders as a `.glass-card` div with the bg-icon watermark.

---

## Shared CSS Classes (global utility)

These classes are used across many files. **Do not convert to Tailwind** — they appear in both CSS and JSX-driven context overrides.

| Class | Description |
|---|---|
| `.btn--primary` | Filled bright-green CTA button/anchor |
| `.btn--secondary` | Transparent outlined button/anchor |
| `.btn--nav` | Outlined bright-green nav "Give" button |
| `.link--arrow` | Inline arrow link with animated icon slide |
| `.void-card` | Scroll-reveal animation base state |
| `.glass-card` | Glassmorphism card (used by `GlassCard.tsx`) |

### Button reference
```
btn--primary:   bg bright-green, text deep-charcoal → hover: bg cream, text deep-green
btn--secondary: transparent, 2px border cream/20% → hover: border cream/100%, bg cream/6%
btn--nav:       transparent, 1.5px border bright-green → hover: bg cream
```

All three are `font-headline`, uppercase, `letter-spacing: .06–.08em`.

---

## Inner Page Hero Pattern

Every inner page (`/events`, `/new-member`, `/connect`, `/give`) starts with this identical hero structure in Tailwind:

```tsx
<section
  className="pt-[calc(var(--nav-height)+var(--space-3xl))] px-12 pb-16 max-w-[1200px] mx-auto lt-lg:px-8 lt-sm:px-3"
  aria-labelledby="PAGE-heading"
>
  <div ref={ref} className="void-card">

    {/* Overline */}
    <p className="flex items-center gap-[10px] font-headline text-[11px] font-bold uppercase tracking-[.15em] text-bright-green mb-6">
      <span className="w-8 h-[1.5px] bg-bright-green inline-block" aria-hidden={true} />
      Section Label
    </p>

    {/* Heading */}
    <h1 id="PAGE-heading"
      className="font-quote text-[clamp(52px,8vw,96px)] font-light leading-[1.05] tracking-[-0.02em] text-cream mb-6 lt-sm:text-[36px]"
    >
      Heading with <em className="italic text-bright-green font-normal">accent</em>
    </h1>

    {/* Sub copy */}
    <p className="text-[17px] text-[rgba(240,237,230,0.5)] max-w-[560px] leading-[1.8]">
      Body text here.
    </p>

  </div>
</section>
```

---

## Form System

Forms (connect page, new member page) share these CSS classes — all defined in `globals.css`, all dependent on the exact HTML structure:

| Class | Element |
|---|---|
| `.form-field` | `<div>` wrapper for each label+input pair |
| `.form-field--row` | Two-column side-by-side field row (collapses at 639px) |
| `.form-field label` | Styled label (font-headline, 11px, uppercase) |
| `.form-field input/select/textarea` | Styled form control |
| `.form-actions` | Button + optional note row |
| `.form-success` | Post-submit success state (centered, check icon, title, body) |
| `.copy-btn` | Small copy button (give page) |
| `.copy-btn--copied` | Active state — added via JS state |

Form card shells (`.connect-form-card`, `.nm-first-timer__inner`) stay in CSS for glassmorphism + `::before` glow.

---

## FAQ Component

`components/FAQ.tsx` is a shared accordion used on every inner page and the home page. It uses exclusively CSS classes:

```
.faq-section          outer section (padding, breakpoint overrides)
.faq-section__inner   max-width container + void-card
.faq-list             flex column list
.faq-item             one Q&A pair
.faq-item--open       JS state — open accordion item (added dynamically)
.faq-item__trigger    button
.faq-item__question   question text
.faq-item__icon       plus icon (rotates 45° when open)
.faq-item__body       collapsible body (max-height animated)
.faq-item__answer     answer text
```

**Never touch `.faq-item--open` or `.faq-item__body` in CSS** — they are part of a max-height accordion animation and removing/changing them will break the open/close transition.

---

## CSS vs Tailwind Boundary — Quick Reference

| What | Where | Why |
|---|---|---|
| Page section layout wrappers | **Tailwind** | Simple max-width + padding, no side effects |
| Typography (headings, labels, body) | **Tailwind** | Pure visual, no state or vendor issues |
| Glassmorphism card shells | **CSS** | `-webkit-backdrop-filter` vendor prefix |
| `::before` / `::after` glow orbs | **CSS** | Pseudo-elements not expressible in Tailwind |
| `.void-card` / `.emerged` | **CSS** | IntersectionObserver JS-state class |
| `.faq-item--open`, `.copy-btn--copied` | **CSS** | JS-toggled state classes |
| Nav (entire component) | **CSS** | Complex animation keyframes + JS open/closing states |
| Home-page sections (hero, about, etc.) | **CSS** | Complex image treatments, masks, 3-D canvas |
| About page | **CSS** | Complex image overlays, pillar cards, parallax |
| `.btn--primary`, `.btn--secondary` | **CSS** | Used in `.hero__ctas .btn--primary` context override |
| `.link--arrow` SVG hover animation | **CSS** | Custom spring easing `cubic-bezier(.34,1.56,.64,1)` |
| Account numbers (`.give-tile__number`) | **CSS** | `paint-order: stroke fill` + `font-account` not Tailwind-expressible |
| Footer | **Tailwind** | No glassmorphism, no pseudo-elements, fully converted |

---

## Page-Specific Component Shells (stay in CSS)

These CSS classes are **card shells** — they must stay in `globals.css` even though their content is Tailwind:

| Class | File | Type |
|---|---|---|
| `.ev-card` | events/page.tsx | Glassmorphism event card |
| `.ev-featured__image`, `.ev-featured__image-glow`, `.ev-featured__image-overlay` | events/page.tsx | Featured event image panel |
| `.nm-step` | new-member/page.tsx | 4-step card |
| `.nm-step__bg-icon`, `.nm-step__icon`, `.nm-step__title`, `.nm-step__body` | new-member/page.tsx | Step card internals |
| `.nm-first-timer__inner` | new-member/page.tsx | First-timer form card |
| `.connect-info-card`, `.connect-info-card__bg-icon` | connect/page.tsx | Info card shell + 3-D icon |
| `.connect-form-card` | connect/page.tsx | Contact form card |
| `.give-tile`, `.give-tile__bg-icon`, `.give-tile__number` | give/page.tsx | Bank/crypto tile |
| `.copy-btn`, `.copy-btn--copied` | give/page.tsx | Copy-to-clipboard button |
