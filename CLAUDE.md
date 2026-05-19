# CLAUDE.md — AI Working Guide for XPH Web

This file gives Claude (or any AI assistant) the rules needed to make changes to this codebase without breaking the design, animations, responsiveness, or logic.

**Always read this file before making any changes. Read DESIGN_SPEC.md for visual details.**

---

## Project at a Glance

Next.js 15 App Router · TypeScript · Tailwind CSS v3 · custom dark glassmorphism design system.
The site is for a church in Ibadan, Nigeria. Design language: dark bg (#0c0c0c), bright-green (#1FD000) accent, cream text, glass cards.

---

## The Most Important Rule

**The styling is split between Tailwind and `globals.css`. Each system has a defined territory. Never move code from one system to the other unless you fully understand the boundary.**

See the "CSS vs Tailwind Boundary" table in DESIGN_SPEC.md for a complete list. The short version:

- **Tailwind** → layout wrappers, typography, simple flex/grid, responsive padding on page sections
- **`globals.css`** → glassmorphism cards, animations, keyframes, pseudo-elements, nav, home-page, about-page

---

## Before Touching Any File

1. Read `DESIGN_SPEC.md` for the color palette, type scale, spacing tokens, and animation rules.
2. Identify which system (Tailwind vs CSS) the element you're editing belongs to.
3. If editing `globals.css`, check whether the class you're changing is used in a responsive `@media` block at the bottom of the file — there are three blocks (`max-width: 1023px`, `max-width: 767px`, `max-width: 639px`).
4. If changing a CSS class that also appears in responsive blocks, update the responsive override too.
5. Check whether the class is a **JS-state class** (see below) — if it is, do not remove it from CSS even if it looks unused.

---

## Animation System — Do Not Break

### `void-card` + `emerged`

This is the scroll-reveal system. It runs on **every** content section across the whole site.

- `void-card` sets `opacity: 0` initially.
- `useRevealOnScroll()` / `useRevealManyOnScroll()` in `hooks/useRevealOnScroll.ts` add `.emerged` via `IntersectionObserver` when an element enters the viewport.
- `.void-card.emerged` triggers the `voidEmerge` keyframe animation.

**Rules:**
- Never remove `void-card` from an element that uses a `ref` from either reveal hook.
- Never remove the `voidEmerge` keyframe from `globals.css`.
- Never remove `.void-card` or `.void-card.emerged` rules from `globals.css`.
- The `useRevealManyOnScroll` hook takes a CSS selector string (e.g., `'.ev-card'`). If you rename that CSS class, update the hook call too — otherwise nothing reveals.

### Nav animations

`Nav.tsx` uses four keyframes and several state classes:
- `navOverlayIn` / `navOverlayOut` — full-screen overlay slide
- `navLinkIn` / `navLinkOut` — individual link animations with staggered delays
- `.nav__links.open` — open state
- `.nav__links.open.closing` — closing animation state

The `menuState` in Nav is `'closed' | 'open' | 'closing'`. The `.closing` class triggers the exit animation before state resets to `'closed'` after 460ms. **Do not change this timing without updating the `setTimeout` in `Nav.tsx`.**

---

## JS-State Classes — Never Remove From CSS

These classes are toggled programmatically. They look "unused" to static analysis but are essential:

| Class | Toggled by | Effect |
|---|---|---|
| `.void-card.emerged` | `IntersectionObserver` in `useRevealOnScroll` | Triggers reveal animation |
| `.nav__links.open` | `Nav.tsx` `setMenuState('open')` | Full-screen menu overlay |
| `.nav__links.open.closing` | `Nav.tsx` `setMenuState('closing')` | Exit animation |
| `.nav__hamburger.open` | `Nav.tsx` `isMenuOpen` | 3-line → X icon transform |
| `header.nav.solid` | `Nav.tsx` scroll event | Frosted-glass nav background |
| `header.nav.menu-open` | `Nav.tsx` `isMenuOpen` | Removes backdrop-filter (WebKit fix) |
| `.faq-item--open` | `FAQ.tsx` `openIdx` state | Open accordion item |
| `.copy-btn--copied` | `GivePage.tsx` clipboard callback | Copied confirmation state |

---

## Glassmorphism Cards — The One Thing You Must Not Change

Every feature card uses this visual pattern. The `-webkit-backdrop-filter` line is **required** — without it, the blur effect disappears in Safari and iOS.

```css
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);  ← never remove this
```

If you're adding a new card that should match the site's glass style:
1. Give it a CSS class (not Tailwind) for the shell.
2. Copy the glass-card pattern from any existing card class in `globals.css` (e.g., `.ev-card`, `.give-tile`).
3. Add a `::before` glow orb (radial-gradient, `rgba(31,208,0,.05)`, positioned top-right).
4. Add the hover state: `border-color: rgba(31,208,0,.22)` only — never change background on hover.

---

## Tailwind Usage Rules

### Custom tokens — always use them

```tsx
// Colors — use named Tailwind tokens, not hex
className="text-bright-green"     // ✓
className="text-[#1FD000]"        // ✗ (unless the token doesn't exist)

// Spacing — use Tailwind scale (maps 1:1 to CSS tokens)
className="px-12 pb-40"           // px-12 = 48px = --space-xl, pb-40 = 160px = --space-4xl

// Fonts
className="font-headline"         // Syne
className="font-quote"            // Cormorant Garamond
className="font-body"             // DM Sans
```

### Responsive — desktop-first only

The project uses **max-width** breakpoints, not the Tailwind default min-width ones. Only use these prefixes:

```tsx
className="px-12 lt-lg:px-8 lt-sm:px-3"   // ✓ desktop-first
className="px-3 md:px-8 lg:px-12"          // ✗ wrong direction
```

### Arbitrary values — when to use

Tailwind arbitrary values (`text-[clamp(...)]`, `pt-[calc(...)]`, `border-[rgba(...)]`) are used throughout the inner pages. This is intentional and correct for values that don't map to a token.

```tsx
// These patterns are established and correct:
className="pt-[calc(var(--nav-height)+var(--space-3xl))]"
className="text-[clamp(52px,8vw,96px)]"
className="text-[rgba(240,237,230,0.5)]"
className="grid-cols-[1fr_1.5fr]"
className="tracking-[.15em]"
```

---

## Adding a New Inner Page

Follow this checklist:

1. Create `app/PAGE-NAME/page.tsx` with `'use client'` at the top.
2. Structure: `<Nav />` → `<main id="main">` → sections → `<FAQ />` → `<Newsletter />` → `<Footer />`.
3. Start with the hero section — copy the hero Tailwind pattern from any existing inner page (see DESIGN_SPEC.md "Inner Page Hero Pattern").
4. All section containers: `max-w-[1200px] mx-auto px-12 lt-lg:px-8 lt-sm:px-3`.
5. Add `useRevealOnScroll` to each section's main content block and apply `void-card`.
6. If the page has feature cards with glassmorphism, add the CSS class to `globals.css` — do not try to replicate the glass effect with Tailwind.
7. Import `useRevealOnScroll` or `useRevealManyOnScroll` from `@/hooks/useRevealOnScroll`.

---

## Adding a New Component to the Home Page

Home-page sections are CSS-only. Follow this pattern:

1. Create a new component in `components/`.
2. Write CSS in `globals.css` using BEM naming.
3. Use `useRevealOnScroll()` with `void-card` for scroll animation.
4. Add responsive overrides to the correct `@media` block at the bottom of `globals.css`.
5. Import and mount the component in `app/page.tsx`.

---

## Editing `globals.css` Safely

The file has this structure — do not reorder sections:

```
1. @tailwind directives
2. :root CSS variables (colors, fonts, spacing, radii)
3. Reset & base styles
4. Keyframe animations
5. .void-card / .emerged / .anim
6. Nav
7. Buttons (.btn--primary, .btn--secondary, .btn--nav, .link--arrow)
8. Hero
9. About (home)
10. ... home-page sections ...
11. Newsletter
12. Page hero (shared across inner pages)
13. About page sections
14. FAQ component
15. Connect page card shells
16. Give page tile shells + copy button
17. @media (max-width: 1023px)
18. @media (max-width: 767px)
19. @media (max-width: 639px)
20. Nav mobile menu keyframes + .nav__links.open styles
```

When adding a new inner page's CSS:
- Add it **between the Give page section and the first `@media` block** (between sections 16 and 17).
- Add responsive overrides to the existing `@media` blocks at the bottom — never create new `@media` blocks.

---

## What Never To Do

- **Remove `-webkit-backdrop-filter`** from any CSS rule that has `backdrop-filter`.
- **Remove `void-card` class** from elements that use a reveal `ref`.
- **Delete any keyframe** (`voidEmerge`, `marquee`, `text-march`, `pulse`, `navOverlay*`, `navLink*`, `fadeUp`, `fadeIn`).
- **Use Tailwind `sm:`, `md:`, `lg:`, `xl:` breakpoints** — this project uses `lt-lg:`, `lt-md:`, `lt-sm:` only.
- **Hard-code hex colors** in className — always use the named color token.
- **Import fonts in component files** — they are loaded globally in `app/layout.tsx`.
- **Add bold weight to `<em>` accent elements** inside headings — they should always be `font-normal` with `italic` and `text-bright-green`.
- **Use localStorage or sessionStorage** — not supported in the rendering environment.
- **Change the Nav close animation timeout** (460ms) without updating `Nav.tsx`'s `setTimeout` to match.

---

## TypeScript Conventions

- All pages and components that use state or browser APIs must have `'use client'` at the top.
- Props interfaces go at the top of the file, above the component.
- Icon types are referenced as `typeof IconHeart` (from `@tabler/icons-react`).
- Form state type: `type FormState = 'idle' | 'submitting' | 'success'` (used on connect and new-member pages).

---

## Quick Diagnostic Checklist

If something looks wrong after a change, check in this order:

1. **Element is invisible / never appears** → Did you remove `void-card` or the `emerged` animation? Is `useRevealOnScroll` still attached?
2. **Card has no blur effect** → Is `-webkit-backdrop-filter` still on the card's CSS class?
3. **Layout breaks at mobile** → Are you using `lt-sm:` prefix, not `sm:`?
4. **Hover border doesn't turn green** → The hover must target `border-color` only — not `background`.
5. **Font looks wrong** → Is the element using `font-headline`, `font-body`, or `font-quote`? Are font variables loaded in `layout.tsx`?
6. **Nav menu doesn't animate out** → Did something change the `menuState` flow or the 460ms timeout in `closeMenu()`?
7. **Accordion doesn't open/close** → `.faq-item--open` or `.faq-item__body` CSS was modified.
