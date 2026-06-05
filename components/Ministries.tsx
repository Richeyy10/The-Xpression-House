'use client'

import { useEffect, useRef, useState } from 'react'
import { IconBuildingChurch } from '@tabler/icons-react'
import Button from './ui/Button'

const STRIP  = 16
const PEEK   = 16
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

interface MinistriesCardProps {
  num: string
  bgClass: string
  bgImage?: string
  title: string
  desc: string
  active: boolean
  emerged: boolean
  animDelay: number
  cardStyle: React.CSSProperties
  onActivate: () => void
  onSwipeDown: () => void
}

function MinistriesCard({
  num, bgClass, bgImage, title, desc,
  active, emerged, animDelay, cardStyle, onActivate, onSwipeDown
}: MinistriesCardProps) {
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
      </div>
    </article>
  )
}

const MINISTRIES = [
  {
    num: 'Choir',
    bgClass: 'events__card-bg--1',
    bgImage: '/choir.jpg',
    title: 'Choir',
    desc: 'Join our talented choir in worship and music.',
  },
  {
    num: 'Media',
    bgClass: 'events__card-bg--2',
    bgImage: '/media.jpg',
    title: 'Media',
    desc: 'Get involved in our media team and help us share the message with the world.',
  },
  {
    num: 'Gospel Project',
    bgClass: 'events__card-bg--3',
    bgImage: '/gospel-project.jpg',
    title: 'Gospel Project',
    desc: "Join our talented dance group and express your faith through movement.",
  },
  {
    num: 'Drama',
    bgClass: 'events__card-bg--3',
    bgImage: '/drama.jpg',
    title: 'Drama',
    desc: 'Get involved in our drama team and help us tell stories that matter.',
  },
  {
    num: 'Protocol',
    bgClass: 'events__card-bg--3',
    bgImage: '/protocol.jpg',
    title: 'Protocol',
    desc: 'Learn about our church protocols and procedures.',
  },
]

export default function Ministries() {
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
              <em>Our</em><br />Ministries
            </h2>
          </div>
          <div className="events__desc">
            Get connected, grow in faith and serve with us. Explore our ministries and find your place in the Xpression House family.
          </div>
        </div>
        <div className="events__grid" ref={gridRef} onMouseLeave={() => setActiveIdx(0)}>
          {MINISTRIES.map((ev, i) => (
            <MinistriesCard
              key={ev.num}
              {...ev}
              active={activeIdx === i}
              emerged={emergedSet.has(i)}
              animDelay={i * 120}
              cardStyle={getCardStyle(i, activeIdx, MINISTRIES.length)}
              onActivate={() => setActiveIdx(i)}
              onSwipeDown={() => setActiveIdx((activeIdx + 1) % MINISTRIES.length)}
            />
          ))}
        </div>
        <div className="events__footer">
          <Button
            href="/"
            variant="secondary"
            icon={<IconBuildingChurch size={16} aria-hidden />}
            style={{ marginTop: 'var(--space-lg)' }}
          >
            View all ministries
          </Button>
        </div>
      </div>
    </section>
  )
}