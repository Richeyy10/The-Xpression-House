# XPH Web — The Xpression House

Church website for The Xpression House (XPH), Ibadan, Nigeria. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and a bespoke dark glass-morphism design system.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 + `globals.css` (mixed — see DESIGN_SPEC.md) |
| Icons | `@tabler/icons-react` v3 |
| Fonts | Cormorant Garamond · Syne · DM Sans · Tulpen One (all via `next/font/google`) |
| Runtime | React 19 |

---

## Project Structure

```
xph-web-v2/
├── app/
│   ├── layout.tsx          # Root layout — font injection, metadata, skip-link
│   ├── globals.css         # Global CSS (reset, design tokens, animations, BEM components)
│   ├── page.tsx            # Home page (assembles home-page components)
│   ├── about/page.tsx      # About Us page
│   ├── events/page.tsx     # Events page
│   ├── new-member/page.tsx # I'm New / New Members page
│   ├── connect/page.tsx    # Connect / Contact page
│   └── give/page.tsx       # Give / Donations page
│
├── components/
│   ├── Nav.tsx             # Fixed navigation with mobile overlay menu
│   ├── Footer.tsx          # Site footer (fully Tailwind)
│   ├── Hero.tsx            # Home hero with 3-D canvas background
│   ├── About.tsx           # Home "About" section
│   ├── Events.tsx          # Home "Events" accordion section
│   ├── Quote.tsx           # Home "Quote" carousel
│   ├── Sermon.tsx          # Home "Sermon" highlight
│   ├── Setlist.tsx         # Home marquee setlist section
│   ├── MarqueeSection.tsx  # Scrolling text marquee
│   ├── ScrollText.tsx      # Parallax / scroll-driven text
│   ├── Pastor.tsx          # Pastor profile section
│   ├── HeadChurch.tsx      # Head church / covering section
│   ├── GivingCTA.tsx       # Giving call-to-action cards
│   ├── Visit.tsx           # Service info & location
│   ├── Newsletter.tsx      # Newsletter signup form
│   ├── FAQ.tsx             # Accordion FAQ (shared across all pages)
│   └── ui/
│       ├── ArrowLink.tsx   # `<a>` with animated arrow icon (.link--arrow)
│       ├── Button.tsx      # Polymorphic button/anchor (.btn--primary / .btn--secondary)
│       └── GlassCard.tsx   # Glassmorphism card wrapper (.glass-card)
│
├── hooks/
│   └── useRevealOnScroll.ts  # IntersectionObserver reveal animation hooks
│
├── public/                 # Static assets (logos, images)
├── tailwind.config.ts      # Tailwind theme (colors, fonts, custom breakpoints)
└── tsconfig.json
```

---

## Routes

| URL | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — full-page composition of home components |
| `/about` | `app/about/page.tsx` | About Us, vision & mission, pillars, CTA |
| `/events` | `app/events/page.tsx` | Featured event + upcoming events grid |
| `/new-member` | `app/new-member/page.tsx` | Welcome, service info, 4-step onboarding, first-timer form |
| `/connect` | `app/connect/page.tsx` | Contact info cards + contact form |
| `/give` | `app/give/page.tsx` | Bank transfer accounts + cryptocurrency wallets |

Every inner page (`/events`, `/new-member`, `/connect`, `/give`) follows the same structure:

```tsx
<Nav />
<main id="main">
  <PageHero />
  {/* page-specific sections */}
  <FAQ />
  <Newsletter />
</main>
<Footer />
```

---

## Getting Started

```bash
yarn install
yarn dev          # starts on http://localhost:3000
yarn build        # production build
yarn lint         # ESLint check
```

---

## Key Conventions

### CSS Architecture (hybrid)
Styling is split between two systems. **Read DESIGN_SPEC.md before touching any styles.**

- **Tailwind** — layout containers, typography, simple flex/grid, responsive wrappers. Used heavily in `Footer.tsx` and all inner-page components.
- **`globals.css` BEM classes** — glassmorphism card shells, animations, the nav, all home-page sections, the about page, and any rule that needs vendor prefixes (`-webkit-backdrop-filter`) or complex pseudo-elements.

Do not mix the two systems on the same element's core visual treatment. Wrapper layout → Tailwind. Card shell glassmorphism → CSS.

### Scroll Reveal Animation
Every section that fades in on scroll uses the hook from `hooks/useRevealOnScroll.ts`. The pattern is always:

```tsx
const ref = useRevealOnScroll()   // single element
// or
const ref = useRevealManyOnScroll('.child-selector')  // multiple children

<div ref={ref} className="void-card">  {/* starts invisible, animates in */}
```

Never remove `void-card` from an element that uses a reveal ref — it controls the initial hidden state.

### Fonts
All four font families are injected as CSS custom properties by `layout.tsx`. Reference them via Tailwind utilities (`font-headline`, `font-body`, `font-quote`) or CSS variables (`var(--font-headline)`, etc.). Never import fonts directly in component files.

### Icons
Use `@tabler/icons-react` exclusively. Always pass `aria-hidden={true}` to decorative icons. SVG size is set via the `size` prop.

### Accessibility
- Skip link is in `layout.tsx` (`<a href="#main" className="skip-link">`)
- Every `<main>` must have `id="main"`
- Interactive elements need `:focus-visible` — already handled globally
- Text selection color is set globally (bright-green on deep-green)
