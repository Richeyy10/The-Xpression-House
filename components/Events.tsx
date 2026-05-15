'use client'

import { useEffect, useRef, useState } from 'react'
import { IconCalendar, IconClock, IconArrowUpRight } from '@tabler/icons-react'

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
  onActivate: () => void
}

function EventCard({ num, bgClass, title, desc, date, time, active, emerged, animDelay, onActivate }: EventCardProps) {
  return (
    <article
      className={`events__card${emerged ? ' emerged' : ''}${active ? ' active' : ''}`}
      style={emerged ? { animationDelay: `${animDelay}ms` } : undefined}
      onMouseEnter={onActivate}
      onClick={onActivate}
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
        <div className="events__card-arrow" aria-hidden="true">
          <IconArrowUpRight size={16} />
        </div>
      </div>
    </article>
  )
}

const EVENTS = [
  {
    num: '01',
    bgClass: 'events__card-bg--1',
    title: 'Faith series: Walking by faith',
    desc: 'Continue the journey through our current series on building unshakeable faith with Pastor Fred Elegbe.',
    date: '18 May 2026',
    time: '8:00 AM',
  },
  {
    num: '02',
    bgClass: 'events__card-bg--2',
    title: 'Midweek bible study',
    desc: 'Dive deeper into scripture with interactive group discussion and practical application.',
    date: '21 May',
    time: '6:30 PM',
  },
  {
    num: '03',
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
              setEmergedSet(prev => {
                const next = new Set(prev)
                next.add(idx)
                return next
              })
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
        <div
          className="events__grid"
          ref={gridRef}
          onMouseLeave={() => setActiveIdx(0)}
        >
          {EVENTS.map((ev, i) => (
            <EventCard
              key={ev.num}
              {...ev}
              active={activeIdx === i}
              emerged={emergedSet.has(i)}
              animDelay={i * 120}
              onActivate={() => setActiveIdx(i)}
            />
          ))}
        </div>
        <div className="events__footer">
          <a href="#" className="btn--secondary" style={{ marginTop: 'var(--space-lg)' }}>
            <IconCalendar size={16} aria-hidden /> View all events
          </a>
        </div>
      </div>
    </section>
  )
}
