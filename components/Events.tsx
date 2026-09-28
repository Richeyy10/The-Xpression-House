'use client'

import { useEffect, useRef, useState } from 'react'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import Button from './ui/Button'

const STRIP = 16
const PEEK = 16

function getCardStyle(cardIdx: number, activeIdx: number, total: number): React.CSSProperties {
  let left: number
  let zDesk: number

  if (cardIdx === activeIdx) {
    left = activeIdx * STRIP
    zDesk = 10
  } else if (cardIdx < activeIdx) {
    left = cardIdx * STRIP
    zDesk = cardIdx + 1
  } else {
    const numPeeks = total - 1 - activeIdx
    const peekRank = cardIdx - activeIdx - 1
    left = 100 - (numPeeks - peekRank) * PEEK
    zDesk = 10 + (cardIdx - activeIdx)
  }

  // Desktop-only positioning now. Mobile layout is handled entirely by CSS
  // (flex + scroll-snap), so we don't compute or pass any mobile offsets here —
  // that removes the old fixed-pixel-height assumption completely.
  return {
    '--card-left': `${left}%`,
    '--z-desk': zDesk,
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
  onActivate: () => void
}

const isDesktopViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches

function EventCard({
  num, bgClass, bgImage, title, desc, date, time,
  active, emerged, animDelay, cardStyle, onActivate
}: EventCardProps) {
  const cardEl = useRef<HTMLElement | null>(null)

  const handleActivate = () => {
    if (isDesktopViewport()) onActivate()
  }

  // Mobile-only tap feedback: card lifts and gains a soft shadow while touched,
  // settles back on release. This is purely tactile and independent of layout —
  // safe to keep as-is with the new scroll-snap carousel.
  const handleTouchStart = () => {
    if (isDesktopViewport() || !cardEl.current) return
    cardEl.current.classList.add('events__card--lifted')
  }

  const handleTouchEnd = () => {
    if (isDesktopViewport() || !cardEl.current) return
    cardEl.current.classList.remove('events__card--lifted')
  }

  return (
    <article
      ref={el => { cardEl.current = el }}
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
  {
    num: 'Wednesday',
    bgClass: 'events__card-bg--2',
    bgImage: '/bible-study.jpg',
    title: 'Midweek bible study',
    desc: 'Dive deeper into scripture with interactive group discussion and practical application.',
    date: '21 May',
    time: '6:30 PM',
  },
]

export default function Events() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [emergedSet, setEmergedSet] = useState<Set<number>>(new Set())

  // Entrance reveal — now shared by desktop and mobile. Cards fade/rise in via
  // CSS transition (the .emerged class) as they scroll into view; the old
  // separate scrubbed GSAP drop for mobile is gone, along with its magic-number
  // height dependency.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll('.events__card'))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLElement)
            if (idx !== -1) {
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