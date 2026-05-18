'use client'

import { useEffect, useRef, useState } from 'react'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import Button from './ui/Button'

const STRIP  = 12
const PEEK   = 12
const PEEK_M = 64

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

  let topM: number
  let zMob: number

  if (cardIdx === activeIdx) {
    topM = (total - 1) * PEEK_M
    zMob = 10
  } else {
    const nonActive = Array.from({ length: total }, (_, i) => i).filter(i => i !== activeIdx)
    const rank      = nonActive.indexOf(cardIdx)
    topM = rank * PEEK_M
    zMob = rank + 1
  }

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
  title: string
  desc: string
  date: string
  time: string
  active: boolean
  emerged: boolean
  animDelay: number
  cardStyle: React.CSSProperties
  onActivate: () => void
  onSwipeDown: () => void
}

function EventCard({ num, bgClass, title, desc, date, time, active, emerged, animDelay, cardStyle, onActivate, onSwipeDown }: EventCardProps) {
  const touchY = useRef(0)

  return (
    <article
      className={`events__card${emerged ? ' emerged' : ''}${active ? ' active' : ''}`}
      style={{ ...cardStyle, ...(emerged ? { animationDelay: `${animDelay}ms` } : {}) }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      onTouchStart={e => { touchY.current = e.touches[0].clientY }}
      onTouchEnd={e => {
        const dy = e.changedTouches[0].clientY - touchY.current
        if (active && dy > 50) {
          e.preventDefault()
          onSwipeDown()
        } else if (!active && Math.abs(dy) < 15) {
          e.preventDefault()
          onActivate()
        }
      }}
    >
      <div className={`events__card-bg ${bgClass}`} />
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
    title: 'Faith series: Walking by faith',
    desc: 'Continue the journey through our current series on building unshakeable faith with Pastor Fred Elegbe.',
    date: '18 May 2026',
    time: '8:00 AM',
  },
  {
    num: 'Wednesday',
    bgClass: 'events__card-bg--2',
    title: 'Midweek bible study',
    desc: 'Dive deeper into scripture with interactive group discussion and practical application.',
    date: '21 May',
    time: '6:30 PM',
  },
  {
    num: 'Saturday',
    bgClass: 'events__card-bg--3',
    title: 'Youth hangout & fellowship',
    desc: "Games, food, music, and real conversations. Bring a friend — everyone's welcome.",
    date: '24 May',
    time: '4:00 PM',
  },
]

export default function Events() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [emergedSet, setEmergedSet] = useState<Set<number>>(new Set())

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
              onSwipeDown={() => setActiveIdx((activeIdx + 1) % EVENTS.length)}
            />
          ))}
        </div>
        <div className="events__footer">
          <Button href="/events" variant="secondary" icon={<IconCalendar size={16} aria-hidden />} style={{ marginTop: 'var(--space-lg)' }}>
            View all events
          </Button>
        </div>
      </div>
    </section>
  )
}
