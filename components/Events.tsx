'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import Button from './ui/Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const STRIP  = 16
const PEEK   = 16
const PEEK_M = 600 // vertical gap between mobile cards — must be >= actual rendered card height + desired gap, or cards WILL overlap. Check devtools for real card height and adjust.

// Mobile stack-drop entrance tuning.
const MOBILE_QUERY = '(max-width: 767px)'
const DROP_START_Y = 140 // positive — cards start BELOW their resting spot and rise up

function getCardStyle(cardIdx: number, activeIdx: number, total: number): React.CSSProperties {
  let left: number
  let zDesk: number

  if (cardIdx === activeIdx) {
    left  = activeIdx * STRIP
    zDesk = 10
  } else if (cardIdx < activeIdx) {
    left  = cardIdx * STRIP
    zDesk = cardIdx + 1
  } else {
    const numPeeks = total - 1 - activeIdx
    const peekRank = cardIdx - activeIdx - 1
    left  = 100 - (numPeeks - peekRank) * PEEK
    zDesk = 10 + (cardIdx - activeIdx)
  }

  // Mobile: fixed sequential stacking by index, NOT relative to activeIdx.
  // Mobile no longer has a "foreground card" concept (tap-to-swap was removed),
  // so each card just sits a fixed distance below the one before it — always,
  // regardless of any active state. This guarantees cards can never overlap
  // as long as PEEK_M >= real card height.
  const topM = cardIdx * PEEK_M
  const zMob = cardIdx + 1

  return {
    '--card-left': `${left}%`,
    '--card-top':  `${topM}px`,
    '--z-desk':    zDesk,
    '--z-mob':     zMob,
  } as React.CSSProperties
}

interface EventCardProps {
  num: string
  bgClass: string
  bgImage?: string
  title: string
  desc: string
  date: string
  time: string
  active: boolean
  emerged: boolean
  animDelay: number
  cardStyle: React.CSSProperties
  registerRef: (el: HTMLElement | null) => void
  onActivate: () => void
}

// Reposition-on-interaction only makes sense for the desktop stacked/peek layout —
// mobile cards are now spaced out and revealed by scroll, so tapping shouldn't move them.
const isDesktopViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches

function EventCard({
  num, bgClass, bgImage, title, desc, date, time,
  active, emerged, animDelay, cardStyle, registerRef, onActivate
}: EventCardProps) {
  const cardEl = useRef<HTMLElement | null>(null)

  const handleActivate = () => {
    if (isDesktopViewport()) onActivate()
  }

  // Mobile-only tap feedback: card lifts and gains a soft shadow while touched,
  // settles back down on release. Doesn't reposition anything — purely tactile.
  const handleTouchStart = () => {
    if (isDesktopViewport() || !cardEl.current) return
    cardEl.current.classList.add('events__card--lifted')
    gsap.to(cardEl.current, { y: -8, scale: 1.02, duration: 0.25, ease: 'power2.out' })
  }

  const handleTouchEnd = () => {
    if (isDesktopViewport() || !cardEl.current) return
    cardEl.current.classList.remove('events__card--lifted')
    gsap.to(cardEl.current, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out' })
  }

  return (
    <article
      ref={el => { cardEl.current = el; registerRef(el) }}
      className={`events__card${emerged ? ' emerged' : ''}${active ? ' active' : ''}`}
      style={{ ...cardStyle, ...(emerged ? { animationDelay: `${animDelay}ms` } : {}) }}
      onMouseEnter={handleActivate}
      onClick={handleActivate}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`events__card-bg ${bgImage ? '' : bgClass}`}
        style={bgImage ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        } : undefined}
      />
      <div className="events__card-overlay" />
      <div className="events__card-content">
        <div className="events__card-num">{num}</div>
        <h3 className="events__card-title">{title}</h3>
        <div className="events__card-desc">{desc}</div>
        <div className="events__card-meta">
          <span><IconCalendar size={14} aria-hidden /> {date}</span>
          <span><IconClock size={14} aria-hidden /> {time}</span>
        </div>
      </div>
    </article>
  )
}

const EVENTS = [
  {
    num: 'Sunday',
    bgClass: 'events__card-bg--1',
    bgImage: '/communion-sunday.jpg',
    title: 'Faith series: Walking by faith',
    desc: 'Continue the journey through our current series on building unshakeable faith with Pastor Fred Elegbe.',
    date: '18 May 2026',
    time: '8:00 AM',
  },
  {
    num: 'Wednesday',
    bgClass: 'events__card-bg--2',
    bgImage: '/bible-study.jpg',
    title: 'Midweek bible study',
    desc: 'Dive deeper into scripture with interactive group discussion and practical application.',
    date: '21 May',
    time: '6:30 PM',
  },
  {
    num: 'Saturday',
    bgClass: 'events__card-bg--3',
    bgImage: '/thanksgiving.jpg',
    title: 'Thanksgiving sunday',
    desc: "Games, food, music, and real conversations. Bring a friend — everyone's welcome.",
    date: '24 May',
    time: '4:00 PM',
  },
]

export default function Events() {
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [emergedSet, setEmergedSet] = useState<Set<number>>(new Set())

  // ── Desktop entrance reveal — original IntersectionObserver system, untouched. ──
  // Gated to desktop widths only, since mobile now gets its own GSAP stack-drop below.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll('.events__card'))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const isDesktop = window.matchMedia(`(min-width: 768px)`).matches
            const idx = cards.indexOf(entry.target as HTMLElement)
            if (idx !== -1 && isDesktop) {
              setEmergedSet(prev => { const n = new Set(prev); n.add(idx); return n })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  // ── Mobile entrance reveal — cards rise up from below, scrubbed to scroll position. ──
  // scrub (not once/onEnter) means this directly tracks the scrollbar: scrolling down
  // plays it forward, scrolling back up plays it in reverse, in real time.
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(MOBILE_QUERY, () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[]
      if (!cards.length) return

      const tween = gsap.fromTo(
        cards,
        {
          y: DROP_START_Y,
          scale: 0.94,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.18,
          ease: 'none', // scrub drives the motion directly — no easing curve fighting it
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true,
          },
        }
      )

      // gsap.matchMedia cleanup — runs when leaving the mobile breakpoint.
      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(cards, { clearProps: 'transform,opacity' })
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section className="events" id="events" aria-labelledby="events-heading">
      <div className="events__inner">
        <div className="events__header">
          <div>
            <h2 id="events-heading" className="events__title">
              <em>Upcoming</em><br />events
            </h2>
          </div>
          <div className="events__desc">
            At the core of our community lies a deep commitment to worship, growth, and fellowship.
            Join us at any of these gatherings.
          </div>
        </div>
        <div className="events__grid" ref={gridRef} onMouseLeave={() => setActiveIdx(0)}>
          {EVENTS.map((ev, i) => (
            <EventCard
              key={ev.num}
              {...ev}
              active={activeIdx === i}
              emerged={emergedSet.has(i)}
              animDelay={i * 120}
              cardStyle={getCardStyle(i, activeIdx, EVENTS.length)}
              registerRef={el => { cardRefs.current[i] = el }}
              onActivate={() => setActiveIdx(i)}
            />
          ))}
        </div>
        <div className="events__footer">
          <Button
            href="/events"
            variant="secondary"
            icon={<IconCalendar size={16} aria-hidden />}
            style={{ marginTop: 'var(--space-lg)' }}
          >
            View all events
          </Button>
        </div>
      </div>
    </section>
  )
}